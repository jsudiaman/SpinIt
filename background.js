/**
 * Background script.
 */

// Create context menu item.
chrome.contextMenus.create({
  'title': 'Spin it!',
  'contexts': ['all'],
  'onclick': function (info, tab) {
    chrome.tabs.sendMessage(tab.id, 'spin');
  }
});
