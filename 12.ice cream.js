document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.ice-cream img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('rotating');
            setTimeout(() => {
                img.classList.remove('rotating');
            }, 500); 
        });
    });

    // 幻燈片效果
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow .slide');
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
    };
    showSlides();
    setInterval(showSlides, 1500); 
  
    document.querySelectorAll('.ice-cream img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    
    document.querySelectorAll('.ice-cream').forEach(iceCream => {
        iceCream.addEventListener('mouseenter', () => {
            iceCream.querySelector('.description').style.visibility = 'visible';
            iceCream.querySelector('.description').style.opacity = '1';
        });
        iceCream.addEventListener('mouseleave', () => {
            iceCream.querySelector('.description').style.visibility = 'hidden';
            iceCream.querySelector('.description').style.opacity = '0';
        });
    });
});
