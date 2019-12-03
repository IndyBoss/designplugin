chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.create({'url':"chrome://TimedOut"})
})


//setInterval(breaktime, 1800000);

setInterval(breaktime, 10000);

function breaktime() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    for (tab in tabs) {
      chrome.tabs.update(tabs[tab].id,{url:"overlay.html"});
    }
  });
}
