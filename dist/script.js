const mobile_menu = document.getElementById('menu');
const x_icon = document.getElementById('x');
const mobile_links = document.querySelectorAll('ul li a');
x_icon.addEventListener('click', () => {
    mobile_menu.classList.toggle('hidden');
    x_icon.classList.toggle('fa-xmark')
});
mobile_links.forEach(element => {
    element.addEventListener('click', () => {
        mobile_menu.classList.toggle('hidden');
        x_icon.classList.toggle('fa-xmark')
    })
});
//testimonials 
console.log(mobile_links)
const user_text = document.getElementsByClassName('user-text')
const user_picture = document.querySelectorAll('.user-pic')
function show_img() {
    for (user of user_picture) { user.classList.remove('active-pic') };
    for (user of user_text) { user.classList.remove('active-text') };

    let i = Array.from(user_picture).indexOf(this);
    user_picture[i].classList.add('active-pic');
    user_text[i].classList.add('active-text');

} for (user of user_picture) { user.addEventListener('click', show_img) };
// pricing 
const cheking = document.querySelector('#toggleBtn');
const card_front = document.querySelectorAll('.front');
const card_back = document.querySelectorAll('.back');
cheking.addEventListener('change', () => {
    card_front.forEach((ele) => { ele.classList.toggle('-rotate-y-180'); });
    card_back.forEach((ele) => { ele.classList.toggle('rotate-y-180'); });

})


const navbar = document.querySelector('header');

const sectionn = document.querySelectorAll('section');
const navlinkss = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }

}