(async () => {
  const { echo } = await chrome.runtime.sendMessage({ greeting: 'hello' });
  console.log('service worker 响应 =======>', echo);
})();
