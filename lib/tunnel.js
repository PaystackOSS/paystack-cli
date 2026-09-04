import { bin, install, Tunnel } from 'cloudflared';
import fs from 'node:fs';
import * as helpers from './helpers.js';

let activeTunnel = null;

/**
 * Starts a zero-config tunnel pointing to the specified local URL/port.
 * Automatically downloads the native cloudflared binary (with full Apple Silicon/arm64 & Intel support)
 * on first run and generates a public HTTPS trycloudflare.com URL.
 *
 * @param {string} targetUrl - e.g. "http://localhost:3000"
 * @returns {Promise<{ url: string, close: () => Promise<void> }>}
 */
export async function startTunnel(targetUrl) {
  if (activeTunnel) {
    await stopTunnel();
  }

  if (!fs.existsSync(bin)) {
    helpers.infoLog('Setting up tunnel client...');
    await install(bin);
  }

  return new Promise((resolve, reject) => {
    try {
      const tunnelInstance = Tunnel.quick(targetUrl);
      let isResolved = false;

      tunnelInstance.once('url', (url) => {
        isResolved = true;
        activeTunnel = tunnelInstance;
        resolve({
          url,
          close: stopTunnel,
        });
      });

      tunnelInstance.once('error', (err) => {
        if (!isResolved) {
          reject(err);
        }
      });

      tunnelInstance.once('exit', (code, signal) => {
        if (!isResolved) {
          reject(
            new Error(
              `Tunnel process exited unexpectedly (code: ${code}, signal: ${signal})`,
            ),
          );
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Stops the active tunnel if one is running.
 */
export async function stopTunnel() {
  if (activeTunnel) {
    try {
      activeTunnel.stop();
    } catch (e) {
      // ignore
    }
    activeTunnel = null;
  }
}

// Cleanup active tunnel process on exit
process.on('exit', () => {
  if (activeTunnel) {
    try {
      activeTunnel.stop();
    } catch (e) {
      // ignore
    }
  }
});
