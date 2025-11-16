import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Overlay from '@pages/overlay/Overlay';
import '@pages/overlay/index.css';

let reactRoot: Root | null = null;

export function mountOverlay() {
  if (document.getElementById('__extension_overlay_root')) {
    return;
  }

  const overlayContainer = document.createElement('div');
  overlayContainer.id = '__extension_overlay_root';


  document.body.appendChild(overlayContainer);

  const root = createRoot(overlayContainer);
  root.render(<Overlay />);
}

export function unmountOverlay() {
  const overlayContainer = document.getElementById('__extension_overlay_root');
  if (!overlayContainer) {
    return;
  }

  reactRoot?.unmount();
  reactRoot = null;

  overlayContainer.remove();
}

export function toggleOverlay() {
  if (document.getElementById('__extension_overlay_root')) {
    unmountOverlay();
  } else {
    mountOverlay();
  }
}

