document.getElementById("openDownloadPage").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/g/*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'detailPage'
                },
                function(response) {
                    window.close();
                }
            ); 
        });        
    });
}


document.getElementById("download").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/gallerytorrents.php*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadPage'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}

document.getElementById("downloadClose").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/gallerytorrents.php*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadPageClose'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}

document.getElementById("onlyShowComment").onclick=function () {
    chrome.tabs.query({ url:'https://www.bilibili.com/video/*', active: true }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'onlyShowComment'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}

document.getElementById("nhentaiDownload").onclick=function () {
    chrome.tabs.query({ url:'https://nhentai.net/g/*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'nhentaiDownload'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}