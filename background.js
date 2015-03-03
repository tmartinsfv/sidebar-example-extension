
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.sidebar.show();
  chrome.sidebar.navigate({path: 'sidebar.html'});
})
