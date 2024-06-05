window.openInNewTab = function (html) {
    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(html);
    newWindow.document.close();
}
