import React from 'react';
import logo from '@assets/img/logo.svg';

export default function Popup() {

  const injectContentScript = async () => {
    console.log("HANDLER INVOKED");
    const [tab] = await chrome.tabs.query({
      currentWindow: true,
      active: true
    });

    if (tab.url!.startsWith('about:')
      || tab.url!.startsWith('chrome:')) {
      console.error('Injection Error');
    }

    console.log("BEFORE CHROME EXECUTESCRIPT");
    await chrome.scripting
      .executeScript({
        target: { tabId: tab.id! },
        files: ['content/index.js'],
      })
      .then(() => {
        console.log("EXECUTESCRIPT SUCCESS");
      })
      .catch(error => {
        if (error.message.includes('Cannot access a chrome:// URL')) {
          console.error('Injection error');
        }
      })
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
        </p>
        <button
          onClick={injectContentScript}
          className='mt-3 px-4 py-2 bg-blue-500 text-white-rounded'
        >
          Inject Here
        </button>
        <p>Popup styled with TailwindCSS!</p>
      </header>
    </div>
  );
}
