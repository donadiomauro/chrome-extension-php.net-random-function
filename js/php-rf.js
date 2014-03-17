// open a link in the current window
function openLink(href)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: href});
    });
}

// open http://www.php.net/<path> where <path> is a random value of the `data`array
function randomFunction(data)
{
    // data is an json array defined in an external file
    var obj = $.parseJSON(data);
    
    // get the PHP version
    $.each(obj, function(key) {
        ver = key;
    });

    var min = 0;
    var max = (obj[ver].length - 1);

    var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    openLink("http://www.php.net/" + obj[ver][randomIndex]);
}


// listener
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
        null,
        {file: "data/data.js"}
    );
    randomFunction(data);
});
