document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const enemy = document.getElementById('enemy');

    // Player movement
    document.addEventListener('keydown', (e) => {
        const step = 10;
        let rect = player.getBoundingClientRect();
        
        switch (e.key) {
            case 'ArrowUp':
                if (rect.top > 0) player.style.top = `${rect.top - step}px`;
                break;
            case 'ArrowDown':
                if (rect.bottom < window.innerHeight) player.style.top = `${rect.top + step}px`;
                break;
            case 'ArrowLeft':
                if (rect.left > 0) player.style.left = `${rect.left - step}px`;
                break;
            case 'ArrowRight':
                if (rect.right < window.innerWidth) player.style.left = `${rect.left + step}px`;
                break;
        }
    });

    // Enemy movement (simple bounce animation)
    setInterval(() => {
        const rect = enemy.getBoundingClientRect();
        let newTop = rect.top + (Math.random() * 20 - 10);
        let newLeft = rect.left + (Math.random() * 20 - 10);

        // Keep enemy within the bounds
        if (newTop < 0) newTop = 0;
        if (newLeft < 0) newLeft = 0;
        if (newTop > window.innerHeight - 50) newTop = window.innerHeight - 50;
        if (newLeft > window.innerWidth - 50) newLeft = window.innerWidth - 50;

        enemy.style.top = `${newTop}px`;
        enemy.style.left = `${newLeft}px`;
    }, 1000);

    // Bounce animation on player
    player.addEventListener('mouseover', () => {
        player.classList.add('bounce');
    });
    player.addEventListener('mouseout', () => {
        player.classList.remove('bounce');
    });
});
