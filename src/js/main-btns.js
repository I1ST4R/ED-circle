const btnStart = document.getElementById('btn-start');
const btnTrial = document.getElementById('btn-trial');
const btns = document.getElementById('main-block__btns')

btns.addEventListener('mouseover', function(e) {
  if (e.target.id === 'btn-start') {
    btnStart.classList.add('btn--active')
    btnTrial.classList.remove('btn--active')
    console.log(1)
  }
  if (e.target.id === 'btn-trial'){
    btnStart.classList.remove('btn--active')
    btnTrial.classList.add('btn--active')
    console.log(2)
  }
})