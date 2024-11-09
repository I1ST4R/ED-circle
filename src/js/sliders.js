/*Service slider variables*/ 
const swiperServicesHover = document.getElementById('swiper-wrapper1')
const circlesServices = document.querySelectorAll('#pagination1 .pagination__circle')

/*Program slider variables*/ 
const swiperProgramsHover = document.getElementById('swiper-wrapper2')
const circlesPrograms = document.querySelectorAll('#pagination2 .pagination__circle')

/*Reviews slider variables*/ 
const swiperReviewsHover = document.getElementById('swiper-wrapper3')
const circlesReviews = document.querySelectorAll('#pagination3 .pagination__circle')

/*default settings for sliders on page*/ 
var slidersettings = {
  spaceBetween: 40,
  keyboard: true,
  coverflowEffect: {
    rotate: 30, 
    stretch: 10, 
    depth: 60, 
    modifier: 2, 
    slideShadows: true, 
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
},
}

/*sliders initialization*/ 
var swiperServices = new Swiper('#services-slider',{
  ...slidersettings,...{
    slidesPerView: 3  
  }
});

var swiperPrograms = new Swiper('#program-slider',{
  ...slidersettings,...{
    slidesPerView: 3,
    spaceBetween: 24,  
  }
});

var swiperReviews = new Swiper('#review-slider',{
  ...slidersettings,...{
  }
});

/*Adaptive scripts for sliders*/ 
ChangeSliderOptions();

window.addEventListener('resize', ChangeSliderOptions);

function ChangeSliderOptions(){
  if (window.innerWidth > 900) {
    changeOptionsOfSwiper(3, 40)
  } 
  if (window.innerWidth > 500 && window.innerWidth <= 900) {
    changeOptionsOfSwiper(2, 20)
  } 
  if (window.innerWidth <= 500) {
    changeOptionsOfSwiper(1, 10)
  }
}

function changeOptionsOfSwiper(slidesPerView, spaceBetween){
  swiperServices.params.slidesPerView = slidesPerView
  swiperServices.params.spaceBetween = spaceBetween
  swiperPrograms.params.slidesPerView = slidesPerView
  swiperPrograms.params.spaceBetween = spaceBetween
}

