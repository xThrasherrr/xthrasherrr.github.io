window.addEventListener('DOMContentLoaded', () => {
    fetch('../config.json')
        .then(res => res.json())
        .then(data => {
            const container = document.querySelector('.buttons');
            data.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'btn';

            // Icon element
            const icon = document.createElement('i');
            icon.className = link.iconClass;
            a.appendChild(icon);

            console.log(link.iconClass);

            // Label
            const span = document.createElement('span');
            span.textContent = link.name;
            a.appendChild(span);

            container.appendChild(a);
            });
        })
    .catch(err => console.error('Error loading config:', err));
});