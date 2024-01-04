setInterval(async () => {
  await chrome.runtime.sendMessage('keepAlive');
}, 20000);
