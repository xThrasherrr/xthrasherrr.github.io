window.addEventListener('DOMContentLoaded', () => {
    loadConfig().then(cfg => {
        const btns = document.querySelector('.buttons');
        cfg.streaming.links.forEach(link => btns.append(createButton(link)));

        const embedContainer = document.querySelector('.embeds');
        cfg.streaming.embeds.forEach(e => {
            let src = '';

            if (e.name === 'Twitch') {
                src = `https://player.twitch.tv/?channel=${encodeURIComponent(e.channel)}&parent=xthrasherrr.dev&autoplay=1`;
            } else if (e.name === 'Kick') {
                src = `https://kick.com/embed/live/${encodeURIComponent(e.channel)}?autoplay=${e.autoplay ? 1 : 0}`;
            } else if (e.embedUrl) {
                src = e.embedUrl;
            }

            const iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.width = e.width;
            iframe.height = e.height;
            iframe.allow = 'autoplay; fullscreen';
            iframe.setAttribute('loading', 'lazy');
            embedContainer.appendChild(iframe);
        });
    });
});