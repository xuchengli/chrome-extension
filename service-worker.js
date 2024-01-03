chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === 'hello') {
    sendResponse({ echo: 'world' });
    return true;
  }
});
