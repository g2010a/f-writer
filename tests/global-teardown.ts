async function globalTeardown() {
  if (process.env.CI && process.env.TAURI_PID) {
    console.log(`CI mode: Killing Tauri process ${process.env.TAURI_PID}`);
    try {
      process.kill(Number(process.env.TAURI_PID));
    } catch (e) {
      console.log('Tauri process already exited');
    }
  }
}

export default globalTeardown;
