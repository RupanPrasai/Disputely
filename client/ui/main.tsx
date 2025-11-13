import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

let reactRoot: Root | null = null;


export function mountRoot(shadowRoot: ShadowRoot) {
  const container = document.createElement("div");
  shadowRoot.appendChild(container);

  reactRoot = createRoot(container);

  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};


export function unmountRoot() {
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  };
};
