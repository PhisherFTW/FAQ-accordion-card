const btns = document.querySelectorAll('.btn-dropdown');

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.target.classList.toggle('open')
    })
  })