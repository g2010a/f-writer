import { spawn } from 'child_process';
import path from 'path';

async function globalSetup() {
  if (process.env.CI) {
    const exe = process.platform === 'win32'
      ? 'target\\release\\f-writer.exe'
      : 'target/release/f-writer';
    
    console.log('CI mode: Starting Tauri app...');
    const tauri = spawn(path.resolve(process.cwd(), exe), [], {
      stdio: 'ignore',
      detached: true,
    });
    
    await new Promise(r => setTimeout(r, 3000));
    
    process.env.TAURI_PID = String(tauri.pid);
    
    console.log(`Tauri started with PID: ${tauri.pid}`);
  } else {
    console.log('Dev mode: Assuming Tauri is running via npm run dev');
  }
  
  process.env.TAURI_URL = 'http://127.0.0.1:1420';
}

export default globalSetup;
