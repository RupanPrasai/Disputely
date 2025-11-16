import React from 'react';
import { createRoot } from 'react-dom/client';
import Overlay from '@pages/overlay/Overlay';
import '@pages/overlay/index.css';

const init = () => {
  if (document.getElementById('__extension_overlay_root')) {
    return;
  }

  const overlayContainer = document.createElement('div');
  overlayContainer.id = '__extension_overlay_root';

  overlayContainer.style.all = 'initial';

  document.body.appendChild(overlayContainer);

  const root = createRoot(overlayContainer);
  root.render(<Overlay />);
};


init();
