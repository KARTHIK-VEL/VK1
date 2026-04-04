use std::time::Duration;
use tauri::{AppHandle, Emitter};
use serde::Serialize;
use sysinfo::System;
use std::sync::{Arc, Mutex};

#[derive(Serialize, Clone)]
pub struct PulseData {
    pub cpu_usage: f32,
    pub ram_usage: f64,
    pub hostname: String,
}

pub struct PulseService {
    app: AppHandle,
    sys: Arc<Mutex<System>>,
}

impl PulseService {
    pub fn new(app: AppHandle) -> Self {
        let mut sys = System::new_all();
        sys.refresh_all();
        Self {
            app,
            sys: Arc::new(Mutex::new(sys)),
        }
    }

    pub fn start(self) {
        let app = self.app.clone();
        let sys_mutex = self.sys.clone();

        tokio::spawn(async move {
            loop {
                let data = {
                    let mut sys = sys_mutex.lock().unwrap();
                    sys.refresh_cpu_usage();
                    sys.refresh_memory();

                    PulseData {
                        cpu_usage: sys.global_cpu_usage(),
                        ram_usage: (sys.used_memory() as f64 / sys.total_memory() as f64) * 100.0,
                        hostname: System::host_name().unwrap_or_default(),
                    }
                };

                // Emit event to all windows
                let _ = app.emit("pulse-update", data);

                tokio::time::sleep(Duration::from_secs(2)).await;
            }
        });
    }
}
