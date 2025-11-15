import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

chrome.action.onClicked.addListener(async tab => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ['content-runtime/overlay.iife.js'],
  });
});
