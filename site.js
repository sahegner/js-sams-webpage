
const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
	//contact.parentElement.style.backgroundColor = 'lightblue'
	contact.closest('nav').style.backgroundColor = 'lightblue'
})