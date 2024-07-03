document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let translateValue = 0;

    nextBtn.addEventListener('click', function() {
        translateValue -= 320; // largura do produto + margem
        carousel.style.transform = `translateX(${translateValue}px)`;
    });

    prevBtn.addEventListener('click', function() {
        translateValue += 320; // largura do produto + margem
        carousel.style.transform = `translateX(${translateValue}px)`;
    });
});
