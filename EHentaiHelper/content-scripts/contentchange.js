
if (window.location.host == 'www.newtonsoft.com') {
    document.querySelectorAll('.codeSnippetContainerTabSingle').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('#tocNav').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('.tableSection').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'endjin.com') {
    document.querySelectorAll('.js-table-wrap').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'devblogs.microsoft.com') {
    document.querySelectorAll('.table-responsive').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'learn.microsoft.com') {
    document.querySelectorAll('#left-container').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('table').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'www.juxiaoshuo.net') {
    document.querySelectorAll('.header_wap').forEach(m => m.style.display = 'none')
    document.querySelectorAll('.Readbtn').forEach(m => m.style.display = 'none')
    document.querySelectorAll('.footer_wap').forEach(m => m.style.display = 'none')
    document.body.style.backgroundImage = ''
}