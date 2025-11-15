import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

const notificationOptions = {
  type: 'basic',
  iconUrl: chrome.runtime.getURL('icon-34.png'),
  title: 'Injecting content script error',
  message: 'You cannot inject script here!',
} as const;

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

const injectContentScript = async () => {
  const [tab] = await chrome.tabs.query({ currentWindow: true, active: true });

  if (tab.url!.startsWith('about:') || tab.url!.startsWith('chrome:')) {
    chrome.notifications.create('inject-error', notificationOptions);
  }

  await chrome.scripting
    .executeScript({
      target: { tabId: tab.id! },
      files: ['/content-runtime/overlay.iife.js'],
    })
    .catch(err => {
      // Handling errors related to other paths
      if (err.message.includes('Cannot access a chrome:// URL')) {
        chrome.notifications.create('inject-error', notificationOptions);
      }
    });
};

chrome.action.onClicked.addListener(() => {
  injectContentScript();
});
