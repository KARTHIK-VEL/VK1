mod pulse;

use tauri::{AppHandle, Manager, WebviewUrl, WebviewWindowBuilder};
use pulse::PulseService;

#[tauri::command]
async fn spawn_widget(app: AppHandle, label: String, x: f64, y: f64, url: String) -> Result<(), String> {
    let window = WebviewWindowBuilder::new(
        &app,
        &label,
        WebviewUrl::App(url.into())
    )
    .inner_size(240.0, 240.0)
    .position(x, y)
    .decorations(false)
    .transparent(true)
    .shadow(true)
    // Always on bottom keeps it on the desktop layer
    .always_on_bottom(true)
    .skip_taskbar(true)
    .build()
    .map_err(|e| e.to_string())?;

    // Apply vibrancy (Acrylic for Windows)
    #[cfg(target_os = "windows")]
    {
        window.set_vibrancy(Some(tauri::vibrancy::Vibrancy::Acrylic))
            .map_err(|e| e.to_string())?;
    }

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![spawn_widget])
        .setup(|app| {
            let service = PulseService::new(app.handle().clone());
            service.start();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
