document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkTasks');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.create({'url':"chrome://newtab"})
  }, false);
}, false);
