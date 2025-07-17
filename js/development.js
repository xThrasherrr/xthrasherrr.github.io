window.addEventListener('DOMContentLoaded', () => {
    loadConfig().then(cfg => {
        const btns = document.querySelector('.buttons');
        cfg.development.links.forEach(link => btns.append(createButton(link)));
    });
});