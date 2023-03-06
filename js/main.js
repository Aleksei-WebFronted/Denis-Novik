// burger
const burger = document.getElementById('burger');

burger.addEventListener('click', myFunction);

function myFunction() {
    const element = document.getElementById('nav');
    element.classList.toggle('open');

    burger.classList.toggle('change');
}