/*
var columnTtileName = 'footer__column-title'
*/
var columnTtileName = 'footer__list-title'
var columnListName = 'footer__list-content'
var arrowName = 'footer__list-svg'


const columnLists = document.querySelectorAll('.' + columnListName)
const arrows = document.querySelectorAll('.' + arrowName)

document.addEventListener("click", function(e){
  const target = e.target.closest('.' + columnTtileName)
  if(target) akordeon(+ target.id.slice(columnTtileName.length))
})

function akordeon(i){
  arrows[i].classList.toggle(arrowName + '--rotated');
  columnLists[i].classList.toggle(columnListName + '--rotated');
}