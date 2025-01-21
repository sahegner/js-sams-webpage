const firstP = document.querySelector('p');
console.log(firstP);
// firstP.textContent = "Hey, you, you're finally awake. You were trying to cross the border, right? Walked right into that Imperial ambush, same as us, and that thief over there. ";

const nav = document.querySelector('nav');
nav.style.textDecoration = 'overline';

const contactA = nav.querySelector('#contact');
contactA.style.backgroundColor = "#3388FF";

// const active = document.querySelectorAll('.active');
// console.log(active);
// active.style.textDecoration = 'underline';

document.title = 'Sam\'s Webpage';

document.addEventListener('click', (e) => {
    // e.target.parentElement.style.border = '2px solid grey';
    const section = e.target.closest('section');
    section.style.border = '2px solid red';
})