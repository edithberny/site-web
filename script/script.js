// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// this year automatically in footer
const year = new Date();

const date = year.getFullYear();

document.getElementById("year").innerHTML = date;

// dynamic age calculation
const birthDate = new Date(1975, 11, 18); // months are 0-indexed (11 = December)
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const hasHadBirthdayThisYear = (today.getMonth() > birthDate.getMonth()) ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
if (!hasHadBirthdayThisYear) {
    age -= 1;
}
const ageSpan = document.getElementById('age');
if (ageSpan) {
    ageSpan.textContent = age.toString();
}
