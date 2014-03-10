// random PHP function
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

    var curr = Math.floor(Math.random() * (max - min + 1)) + min;

    // open the new page
    chrome.tabs.executeScript(null, {code: "window.location = 'http://www.php.net/" + obj[ver][curr] + "';"});
    window.close();
}

// listener
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
        null,
        {file: "data/data.js"}
    );
    randomFunction(data);
});
