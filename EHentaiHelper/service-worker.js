

chrome.runtime.onInstalled.addListener(() => {

    chrome.declarativeNetRequest.updateEnabledRulesets(
        {
            enableRulesetIds:['ruleset']
        }
    )

    // var config = {
    //     mode: "fixed_servers",
    //     rules: {
    //         proxyForHttp: {
    //           scheme: "socks5",
    //           host: "127.0.0.1",
    //           port: 9080
    //         },
    //         proxyForHttps: {
    //           scheme: "socks5",
    //           host: "127.0.0.1",
    //           port: 9080
    //         }, 
    //         fallbackProxy: {
    //           scheme: "socks5",
    //           host: "proxy.qkagame.cn",
    //           port: 8080
    //         },
    //       bypassList: ["foobar.com"]
    //     }
    //   };
    //   chrome.proxy.settings.set(
    //     {value: config, scope: 'regular'},
    //     function() {}
    //   );    
    
    // var config = {
    //     mode: "pac_script",
    //     pacScript: {
    //         url: "http://localhost:81/auto.pac",
    //         mandatory: true
    //     }
    //   };
    //   chrome.proxy.settings.set(
    //     {value: config, scope: 'regular'},
    //     function() {}
    //   );


})