const slidesServicesHover = document.querySelectorAll('.services__card')
const slidesProgramsHover = document.querySelectorAll('.programs__card')
const slidesReviewsHover = document.querySelectorAll('.reviews__card')

var stringServices = 'services__card';
var stringPrograms = 'programs__card';
var stringReviews = 'reviews__card';

document.addEventListener('mouseover', function(e) {
  const eId = e.target.id;
  switch (true) {
  case eId.startsWith(stringServices):
    animateBlocks(slidesServicesHover, stringServices, eId);
    break;
  case eId.startsWith(stringPrograms):
    animateBlocks(slidesProgramsHover, stringPrograms, eId);
    break;
  case eId.startsWith(stringReviews):
    animateBlocks(slidesProgramsHover, stringReviews, eId);
    break;
  }
})

function animateBlocks(block, classEl, eId) {
  block.forEach(function(el){el.classList.remove(classEl + '--active')})
  block[+eId.slice(classEl.length)].classList.add(classEl + '--active')
}