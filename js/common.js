function loadConfig() {
    return fetch('../config.json').then(r => r.json());
}

function createButton(link) {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.className = 'btn';
    const i = document.createElement('i');
    i.className = link.iconClass;
    const span = document.createElement('span');
    span.textContent = link.name;
    a.append(i, span);
    return a;
}