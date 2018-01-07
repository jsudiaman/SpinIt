/**
 * Content script.
 */

var clickedElem;

// Right click listener.
document.addEventListener('contextmenu', function (e) {
  clickedElem = e.target;
}, true);

// Message listener.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    if (request === 'spin') {
      clickedElem.style.animation = 'spinning 2s linear infinite';
    }
  } catch (error) {
    window.alert(error.message);
  }
});
