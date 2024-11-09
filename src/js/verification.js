
const signInBtn = document.querySelector('#verification__sign-in')
const signUpBtn = document.querySelector('#verification__sign-up')
const signInForm = document.querySelector('#verification__form--sign-in')
const signUpForm = document.querySelector('#verification__form--sign-up')
const blur = document.querySelector('.blur')

const btnActiveStyle = 'btn--active'
const unvisibleStyle = '_unvisible'

document.addEventListener('click', function(e){

  switch (e.target.id) {
    case "verification__sign-in":

      signInBtn.classList.add(btnActiveStyle)
      signUpBtn.classList.remove(btnActiveStyle)
      signUpForm.classList.add(unvisibleStyle)
      signInForm.classList.remove(unvisibleStyle)
      if(window.innerWidth <= 900) blur.classList.remove(unvisibleStyle)
      break;

    case "verification__sign-up":

      signInBtn.classList.remove(btnActiveStyle)
      signUpBtn.classList.add(btnActiveStyle)
      signInForm.classList.add(unvisibleStyle)
      signUpForm.classList.remove(unvisibleStyle)
      if(window.innerWidth <= 900) blur.classList.remove(unvisibleStyle)
      break;

    default:
      if(!e.target.closest('.verification__form')){
        signInForm.classList.add(unvisibleStyle)
        signUpForm.classList.add(unvisibleStyle)
        blur.classList.add(unvisibleStyle)
      }
  }

})