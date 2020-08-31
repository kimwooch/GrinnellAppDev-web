'use strict';
let data = [
  {
    name: 'Arbhy',
    type: 'Leadership',
    title: 'Lead of sth',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
  {
    name: 'Bravo',
    type: 'Leadership',
    title: 'lead of sth else',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
  {
    name: 'Charlie',
    type: 'Leadership',
    title: 'Lead of sth special',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
  {
    name: 'Delta',
    type: 'Engineer',
    title: 'Engineer of ios',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
  {
    name: 'Elephant',
    type: 'Engineer',
    title: 'Engineer of sth',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
  {
    name: 'Fox',
    type: 'Engineer',
    title: 'Engineer of sth else',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/maijid.jpeg',
  },
];

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// Hanle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//Navbar toggle Button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact');
  scrollIntoView('#contact');
});

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show 'arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
//Handle click on the arrow up button

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//Handle click on logo to home screen
const navbarLogo = document.querySelector('.navbar__logo');
navbarLogo.addEventListener('click', () => {
  scrollIntoView('#home');
});
//Projects

//json data fetch to the file
let work = document.querySelector('div.work__projects');
for (var i = 0; i < data.length; i++) {
  let projectLink = document.createElement('a');
  projectLink.href = data[i].link;
  if (data[i].type != 'Leadership') {
    projectLink.className = 'project ${data[i].type} invisible';
  } else {
    projectLink.className = 'project ${data[i].type}';
  }
  projectLink.target = 'blank';
  projectLink.dataType = data[i].type;

  let image = document.createElement('img');
  image.className = 'project__img';
  image.src = data[i].image;
  image.alt = 'Youtube';
  projectLink.appendChild(image);

  let description = document.createElement('div');
  description.className = 'project__description';

  let name = document.createElement('h3');
  name.appendChild(document.createTextNode(data[i].title));
  let span = document.createElement('span');
  span.appendChild(document.createTextNode(data[i].name));
  description.appendChild(name);
  description.appendChild(span);

  projectLink.appendChild(description);
  work.appendChild(projectLink);
}

//selector effect in projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
let obs = document.getElementsByClassName('Leadership');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  //makes the previously selected button invisible
  Array.from(obs).forEach((ob) => {
    if (filter != ob.dataset.type) {
      ob.classList.add('invisible');
    }
  });
  //Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  obs = document.getElementsByClassName(filter);
  console.log(Array.from(obs));
  setTimeout(() => {
    //makes selected buttons visible
    Array.from(obs).forEach((ob) => {
      if (filter === ob.dataset.type) {
        ob.classList.remove('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
