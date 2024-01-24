chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.type == "detailPage" && window.location.href.startsWith('https://e-hentai.org/g/')) {
        console.log('收到处理详情页的命令')
        var ele = document.querySelector("#gd5 > p:nth-child(3) > a")
        var content = ele.textContent.replace('Torrent Download (', '').replace(')', '');
        var num = parseInt(content)
        if (num > 0) {
            console.log('bt文件数量大于0，继续处理：' + num)
            ele.click()
            //window.close()
        } else {
            console.log('bt文件数量等于0，不继续处理：' + num)
        }

    }

    else if (request.type == "downloadPage" && window.location.href.startsWith('https://e-hentai.org/gallerytorrents.php')) {

        console.log('收到处理下载页的命令')
        var nodelist = document.querySelectorAll("#torrentinfo > div > form")
        var sortSeed = Object.values(nodelist).map(m => {
            var seedStr = m.querySelector('div > table > tbody > tr:nth-child(1) > td:nth-child(4)').textContent.replace('Seeds: ', '')
            seeds = parseInt(seedStr)
            return { seeds: seeds, form: m }
        }).sort((a, b) => b.seeds - a.seeds)
        if (sortSeed.length > 0) {
            var a = sortSeed[0].form.querySelector('div > table > tbody > tr:nth-child(3) > td > a')
            a.click()
            console.log('存在可下载的bt')
        }

    }

    else if (request.type == "downloadSehuatang" && window.location.href.startsWith('https://www.sehuatang.net/thread-')) {

        console.log('收到处理下载页的命令')
 
        document.querySelectorAll(".pcb .t_fsz a").forEach(m=>{
            if (m.getAttribute('target')=="_blank" && !m.href.endsWith('jpg')) {
                m.click()
            }
        })


    }

    else if (request.type == "download2048" && window.location.href.startsWith('https://bt.qj8q2.com/2048/state/p')) {

        console.log('收到处理下载页的命令')
 
        document.querySelectorAll("#main > div.t5 > table > tbody > tr.tr1.r_one > th >div >a").forEach(m=>{
            if (m.getAttribute('target')=="_blank" && !m.href.endsWith('jpg')) {
                m.click()
            }
        })


    }

    else if (request.type == "downloadnotion" && window.location.href.startsWith('https://www.notion.so/')) {

        console.log('收到处理下载页的命令')
 
        // document.querySelectorAll("#main > div.t5 > table > tbody > tr.tr1.r_one > th >div >a").forEach(m=>{
        //     if (m.getAttribute('target')=="_blank" && !m.href.endsWith('jpg')) {
        //         m.click()
        //     }
        // }) 
        var content='\n\n标题：'+document.title+'\n\n'+document.body.innerText +'\n\n文章结束'; 

        var filename = document.title+'.txt'; 
    
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        pom.setAttribute('download', filename);
    
        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }

    }
    

    else if (request.type == "downloadPageClose" && window.location.href.startsWith('https://e-hentai.org/gallerytorrents.php')) {

        console.log('收到处理下载页关闭的命令')
        window.close()
    }

    else if (request.type == "onlyShowComment" && window.location.href.startsWith('https://www.bilibili.com/video')) {

        console.log('收到处理只显示评论区的命令') 
        //删除视频区
        document.querySelector("#playerWrap").remove()
        document.querySelector("#biliMainHeader").remove()
        //删除广告区
        document.querySelector("#activity_vote").remove()
        //删除右侧 
        document.querySelector("#app > div > div.right-container.is-in-large-ab").remove()
    }

    sendResponse({ fromcontent: "This message is from content.js" });
});

 
  