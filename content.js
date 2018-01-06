/**
 * Content script.
 */
var clickedElem = null;

// Right click listener.
document.addEventListener('contextmenu', function (e) {
    clickedElem = e.target;
}, true);

// Message listener.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === 'spin') {
        clickedElem.style.animation = "spinning 2s linear infinite";
    }
});
