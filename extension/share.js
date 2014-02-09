extensionState = {
    isEnable: ko.observable(store.get('extensionIsEnable')),
    updateBrowserActionIcon: function() {
        var filePath = (this.isEnable() ?
            'icons/icon48.png' : 'icons/icon48_disable.png');
        var iconUrl = chrome.extension.getURL(filePath);
        chrome.browserAction.setIcon({ 'path': iconUrl });
    }
};
extensionState.isEnable.subscribe(function(newValue) {
    store.set('extensionIsEnable', newValue);
    this.updateBrowserActionIcon();
}, extensionState);

