
const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
	contact.closest('nav').style.backgroundColor = 'lightblue'
})