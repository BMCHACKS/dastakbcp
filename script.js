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

const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".nextArrowBtn",
      prevEl: ".prevArrowBtn",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});
