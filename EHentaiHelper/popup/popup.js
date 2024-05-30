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


document.getElementById("downloadSehuatang").onclick=function () {
    chrome.tabs.query({ url:'https://www.sehuatang.net/thread-*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadSehuatang'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}


document.getElementById("download2048").onclick=function () {
    chrome.tabs.query({ url:'https://bt.qj8q2.com/2048/state/p*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'download2048'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}


document.getElementById("downloadnotion").onclick=function () {
    chrome.tabs.query({ url:'https://www.notion.so/*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadnotion'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}


document.getElementById("downloadGenRssForwhentai").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadGenRssForwhentai'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}


document.getElementById("downloadGetTabsTitle").onclick=function () {
    chrome.tabs.query({ }, function(tabs) {

        var data='';
        tabs.map(tab=>{
            data+=`${tab.title}\n`;
        })
        var clip = navigator.clipboard;
        clip.writeText(data)

        window.close();
    });
}