let snippetsJSON = window.prompt();

function getSnippetByName(name) {
    let snippets = JSON.parse(snippetsJSON);
    let nameRE = new RegExp(name, 'i');
    for (let snippet of snippets) {
        if (nameRE.test(snippet.name)) {
            copy(snippet.content);
            console.log(`${snippet.name}:\n\n${snippet.content}`);
        }
    }
}

function getSnippetByContent(searchString) {
    let snippets = JSON.parse(snippetsJSON);
    let searchRE = new RegExp(searchString, 'ig');
    for (let snippet of snippets) {
        if (searchRE.test(snippet.content)) {
            copy(snippet.content);
            console.log(`${snippet.name}:\n\n${snippet.content}`);
        }
    }
}
