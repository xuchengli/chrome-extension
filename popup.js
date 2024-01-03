(async () => {
  const [ tab ] = await chrome.tabs.query({ active: true });
  if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [ 'content-script.js' ]
    });
  }
})();
