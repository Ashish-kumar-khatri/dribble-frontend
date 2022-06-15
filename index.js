const menuToggler = document.querySelector('#toggler'),
      body = document.querySelector('body')

menuToggler.addEventListener('click',(e) => {
    console.log('clicked',e.target.checked)
    e.target.checked ?
        body.classList.add('no-scroll'):
        body.classList.remove('no-scroll')
})