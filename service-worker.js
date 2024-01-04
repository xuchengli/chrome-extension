async function setupOffscreenDocument(path) {
  const offscreenUrl = chrome.runtime.getURL(path);
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl]
  });

  if (existingContexts.length > 0) {
    return;
  }

  await chrome.offscreen.createDocument({
    url: path,
    reasons: ['BLOBS'],
    justification: 'keep service worker running',
  });
}

(async () => {
  console.log('创建屏幕外文档>>>>');
  await setupOffscreenDocument('offscreen.html');
})();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('接受到消息:', message);
  if (message.greeting === 'hello') {
    sendResponse({ echo: 'world' });
    return true;
  }
});
