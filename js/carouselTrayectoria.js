document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 1500,
        shift: 5
        
    });
})