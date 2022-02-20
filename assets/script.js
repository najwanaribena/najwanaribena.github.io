AOS.init({
    duration: 300,
    once: true
});

const form = document.getElementsByTagName('form');
const menuToggle = document.getElementsByClassName('menu-toggle')[0];
const menuOnMobile = document.getElementsByClassName('menu')[0];
const menuA = menuOnMobile.getElementsByTagName('a');
const projectBox = document.getElementsByClassName('project-box');
const loading = document.getElementById('loading');
const lordIcon = document.getElementsByTagName('lord-icon')[0];
const loadingH3  = loading.getElementsByTagName('h3')[0];
const content = document.getElementsByClassName('content')[0];

window.onload = function() {
    content.classList.remove('invisible');
};

const loadingAnimation = [
    'ippkhukl', // walking
    'ouvpilty', // pushup
    'hovbgwmd', // biking
    'mqlsefjv', // skateboarding
    'jlpgasyu' // swimming
]

const quotes = [
    'Dont stop when you are tired. Stop when you are done!',
    'Stay positive. Attitude is everything.',
    'Only you can change your life. Nobody else can do it for you.',
    'If it was easy, everybody could do it!',
    'Do something today that your future self will thank you for',
    'Life is a journey to be experienced, not a problem to be solved',
    'Where focus goes energy flows',
    'If you expect disappointment, then you can never really be dissapointed.',
    'Get on your phones, scour the internet, and Scooby Doo this sh*t.',
    'Nobody is #1 forever.',
    'You have nothing to fear, if you have nothing to hide.',
    'Even miracles take a little time.',
    "If you don't think, then you shouldn't talk.",
    'To infinity and beyond.',
    'If you good at something, never do it for free.'
];

lordIcon.setAttribute('src', `https://cdn.lordicon.com/${loadingAnimation[Math.floor(Math.random() * loadingAnimation.length)]}.json`)
loadingH3.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

setTimeout(() => {
    lordIcon.style.opacity = 0;
    loadingH3.style.opacity = 0;
}, 4500);

setTimeout(() => {
    loading.classList.add('loading-out');
    setTimeout(() => {
        loading.style.display = 'none';
    }, 1000);
}, 5000);

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('menu-toggle-active');
    menuOnMobile.classList.toggle('menu-active');
});

for (let i = 0; i < menuA.length; i++) {
    menuA[i].addEventListener('click', function() {
        menuToggle.classList.remove('menu-toggle-active');
        menuOnMobile.classList.remove('menu-active');
    });
}

for (let i = 0; i < projectBox.length; i++) {
    projectBox[i].addEventListener('mouseover', function() {
        this.getElementsByClassName('project-img')[0].classList.add('project-img-hover');
        this.getElementsByClassName('project-type')[0].classList.add('project-type-hover');
    });

    projectBox[i].addEventListener('mouseout', function() {
        this.getElementsByClassName('project-img')[0].classList.remove('project-img-hover');
        this.getElementsByClassName('project-type')[0].classList.remove('project-type-hover');
    });
}

for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = `https://api.whatsapp.com/send?phone=6289528451521&text=${this.getElementsByTagName('input')[0].value}`;
        this.getElementsByTagName('input')[0].value = '';
    });
}
