if (document.getElementById('snippetsDownload') === null) {
    let snipsLink = document.createElement('a');
    snipsLink.id = 'snippetsDownload';
    snipsLink.download = 'chrome_snippets_json.txt';
    snipsLink.innerHTML = 'Download snippets';    
    document.querySelectorAll('.widget.vbox.overflow-auto')[2].appendChild(snipsLink);   
}

InspectorFrontendHost.getPreferences(_ => {
    let snipsBlob = new Blob([_.scriptSnippets], {type: 'application/json'});
    snipsLink.href = URL.createObjectURL(snipsBlob);
});
