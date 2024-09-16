// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const modal = document.querySelector('.login-modal');
    const closeBtn = document.querySelector('.close');

    loginBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${index * -100}%)`;
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    });
});
