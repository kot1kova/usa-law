new Swiper(".reviews-slider", {
    loop:true,
    slidesPerView: 1,
    breakpoints: {
      375: {
        spaceBetween: 10,
      },
      425: {
        spaceBetween: 30,
      },
     
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
});


function detectBrowser(){
  return 'Safari'
}


window.addEventListener('DOMContentLoaded',()=>{
  const isIOS = detectBrowser()


  if(isIOS){
    document.body.classList.add('safari')
  }
})