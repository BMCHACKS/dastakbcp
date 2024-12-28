const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Add mousemove event listener for 3D tilt effect
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX, offsetY } = e;
        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;

        // Apply rotation based on mouse position
        card.style.transform = `rotateY(${(x - 50) / 5}deg) rotateX(${(50 - y) / 5}deg)`;
    });

    // Reset rotation on mouse leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    // Redirect to respective category page on click
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
    });
});

