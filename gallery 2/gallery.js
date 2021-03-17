// reference ::: https://swiperjs.com/get-started

const swiperOb = new Swiper(".swiper-container",{
    speed:400,
    spaceBetween:100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-next"
    }
});

const swiper = document.querySelector('.swiper-container').swiper;
window.swiper = swiper;
console.log(swiper);

//swiper.slideNext();
// swiper.slideNext();
