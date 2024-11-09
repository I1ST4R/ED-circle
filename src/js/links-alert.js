const links = document.querySelectorAll('a');

links.forEach(function (link) {
  if(true) //exception 
  {

    link.addEventListener('click', function (e) {

    e.preventDefault(); 
    setTimeout(function() {
      alert('Ссылка нажата')
    }, 400);

  });}
});

