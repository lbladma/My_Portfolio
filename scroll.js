const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
let modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-btn");
let projectTitle = document.querySelector('#project-title');
let projectDescription = document.querySelector('#project-description');
let projectImage = document.querySelector('#project-image');
let repoLink = document.querySelector('#repo-link');
let siteLink = document.querySelector('#site-link');
let rehabApp = document.querySelector('#rehab-btn');
let ecommerceApp = document.querySelector('#ecommerce-btn');
let noteApp = document.querySelector('#note-btn');
let plannerApp = document.querySelector('#planner-btn');
let marvelApp = document.querySelector('#marvel-btn');
let employeeApp = document.querySelector('#employee-btn');
let weatherApp = document.querySelector('#weather-btn');



if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
};

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__header, .section__title`,{delay: 600});
sr.reveal(`.home__footer`,{delay: 700});
sr.reveal(`.home__img`,{delay: 900, origin: 'top'});

sr.reveal(`.projects__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100});
sr.reveal(`.techs__data`,{origin: 'left', interval: 100});


const seedModal = (title, image, description, repo, site,) => {
    modal.classList.add('is-active');
    projectTitle.textContent = title;
    projectDescription.textContent = description;
    projectImage.setAttribute('src', image);
    repoLink.setAttribute('href', repo);
    siteLink.setAttribute('href', site);
};

ecommerceApp.addEventListener('click', () => {
    seedModal('Ecommerce-Backend', 'https://user-images.githubusercontent.com/82244776/132081217-6a58eb4a-1845-4a54-8a7e-933a41998cd0.png', "This project focuses on the backend of web-development, with making changes to a database and making calls to the same database. This project used 'mySQL' to create models for the different data tables used, 'Node.js' to host the local server, 'insomnia' as a rest client to make api calls and get data from the database.", 'https://github.com/jbramirez03/Backend-E-Commerce', 'https://drive.google.com/file/d/15LPzmpW1raXr9v_NsTAyZ8fZKp48HWh5/view?usp=sharing');
});

noteApp.addEventListener('click', () => {
    seedModal('Note-Taker', 'https://user-images.githubusercontent.com/82244776/132269380-3a245b4d-d185-45c0-9092-8f4ffda9f897.png', "This project is a website that implements both front-end and back-end properties of web-development, from the use of 'Node.js' and routes to a simple 'HTML' file. The site allows you to keep track of notes by saving them and having the option to delete them at any time.", 'https://github.com/jbramirez03/Note-keeper', 'https://hidden-earth-67933.herokuapp.com/');
});

plannerApp.addEventListener('click', () => {
    seedModal('Daily-Planner', 'https://user-images.githubusercontent.com/82244776/132269289-f373ea8b-9b36-4ae8-95a8-b3b1855a50be.png', "Front-end project that deals with planning a user's day and keeps track of the current hour of your workday through sections changing colors as the day goes by. This project was created with 'Jquery/Javascript', 'CSS', and 'Html'", 'https://github.com/jbramirez03/Daily-Planner', 'https://jbramirez03.github.io/Daily-Planner/');
});

marvelApp.addEventListener('click', () => {
    seedModal('Marvel-Comics', 'https://user-images.githubusercontent.com/82985153/127040198-6ffec1d0-8429-407c-bf97-b4afef292911.png', "This application utilizes the 'Marvel API' in order to allow a user to search for a Marvel character and be presented with comics that their character has appeared in. For example, the user can input 'Hulk' and be presented all comics (in groups of 6) that Hulk has appeared in and the title of those comics. They can get a comic description and list of creators of each comic by clicking on the 'Learn more' button below each comic.", 'https://github.com/jbramirez03/Marvel-Comics', 'https://jbramirez03.github.io/Marvel-Comics/');
});

employeeApp.addEventListener('click', () => {
    seedModal('Employee-Database', 'https://user-images.githubusercontent.com/82244776/132269106-2cfd4d9d-aae2-4a61-8961-a8c8d1154299.png', "This project focuses on the back-end of web development by using a 'mySQL' database and 'Node.js' to make changes to the database from the command line. With the use of the npm package 'inquirer' to prompt questions in terminal to allow changes to be made to the database.", 'https://github.com/jbramirez03/Employee-database', 'https://drive.google.com/file/d/1KBt4Mr4b7JSQbBMiE0LFq8v3_-r7ee9z/view?usp=sharing');
});

weatherApp.addEventListener('click', () => {
    seedModal('Weather-Notifier', 'https://user-images.githubusercontent.com/82244776/132268339-7bdb522f-dad6-4904-9ba9-e0f00f5c3435.png', 'This website utilizes a weather API in order to allow you to enter any city and the current weather for that city is displayed along with the next five days in the week. Now you can plan accordingly for the week knowing what all the weather conditions are for your city.', 'https://github.com/jbramirez03/Weather-Notifier', 'https://jbramirez03.github.io/Weather-Notifier/');
});


rehabApp.addEventListener('click', () => {
    seedModal('Rehab-Connect', "https://user-images.githubusercontent.com/82244776/134752201-44bc9475-2624-41ed-8cad-32ad2558f46c.png", 'This is social website meant for former addicts to connect with others and build relationships in the hope of overcoming the day to day challenges that comes with recently coming out of rehab. This is achieved through posting to certain milestones on the site and viewing others stories as they have reached that milestone aswell. Signup now and share your story!', 'https://github.com/jbramirez03/Rehab-Connect', 'https://warm-hamlet-41451.herokuapp.com/');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
});