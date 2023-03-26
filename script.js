const logreqBox = document.querySelector('.form-wrap')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', () => {
     logreqBox.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
     logreqBox.classList.remove('active');
})