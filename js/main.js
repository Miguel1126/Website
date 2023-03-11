

const ham = document.querySelector('.ham');
const link = document.querySelector('.link-menu');
const bars = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    link.classList.toggle('activated');
    bars.forEach(child => {child.classList.toggle('animated')});
    ham.classList.toggle('turn');
});

