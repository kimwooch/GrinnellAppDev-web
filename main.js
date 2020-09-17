'use strict';
let data = [
  {
    name: 'Kevin Kim',
    type: 'Leadership',
    title: 'Director of Engineering',
    link: 'https://www.linkedin.com/in/kevin-kim-965241139/',
    image: 'imgs/portrait1.jpg',
  },
  {
    name: 'Dong Jin (Matthew) Park',
    type: 'Leadership',
    title: 'Director of Business',
    link: 'https://www.linkedin.com/in/dong-jin-matthew-park-6a63bb11a/',
    image: 'imgs/members/dongjin.jpg',
  },
  {
    name: 'Quang Nguyen',
    type: 'Leadership',
    title: 'Senior iOS Engineer',
    link: 'https://www.linkedin.com/in/quangngn/',
    image: 'imgs/members/Quang.jpg',
  },
  {
    name: 'Grace Tsui',
    type: 'Leadership',
    title: 'Senior iOS Engineer',
    link: 'https://www.linkedin.com/in/grace-tsui-5082b6168/',
    image: 'imgs/members/GraceT.jpg',
  },
  {
    name: 'Quang Nguyen',
    type: 'IEngineer',
    title: 'Senior iOS Engineer',
    link: 'https://www.linkedin.com/in/quangngn/',
    image: 'imgs/members/Quang.jpg',
  },
  {
    name: 'Grace Tsui',
    type: 'IEngineer',
    title: 'Senior iOS Engineer',
    link: 'linkedin.com/in/grace-tsui-5082b6168/',
    image: 'imgs/members/GraceT.jpg',
  },
  {
    name: 'Hanfeng Lu',
    type: 'IEngineer',
    title: 'iOS Engineer',
    link: 'https://www.linkedin.com/in/hanfeng-lu-334277171/',
    image: 'imgs/members/HanfengLu.jpeg',
  },
  {
    name: 'Haruko Okada',
    type: 'IEngineer',
    title: 'iOS Engineer',
    link: 'https://www.linkedin.com/in/haruko-okada-5137a6153/',
    image: 'imgs/members/haruko.jpg',
  },
  {
    name: 'Rexford Essilfie',
    type: 'IEngineer',
    title: 'iOS Engineer',
    link: 'http://linkedin.com/in/rexfordessilfie',
    image: 'imgs/members/RexfordEssilfie.jpg',
  },

  {
    name: 'Kevin Kim',
    type: 'AEngineer',
    title: 'Senior Android Engineer',
    link: 'https://www.linkedin.com/in/kevin-kim-965241139/',
    image: 'imgs/portrait1.jpg',
  },
  {
    name: 'Giang Khuat',
    type: 'AEngineer',
    title: 'Android Engineer',
    link: 'https://www.linkedin.com/in/giangkhuat/',
    image: 'imgs/members/GiangKhuat.jpg',
  },
  {
    name: 'Kyle Kobayashi',
    type: 'AEngineer',
    title: 'Android Engineer',
    link: 'https://www.linkedin.com/in/kyle-kobayashi-a66309193/',
    image: 'imgs/members/kylekobayashi.jpg',
  },
  {
    name: 'Autumn Kwon',
    type: 'AEngineer',
    title: 'Android Engineer',
    link: '#',
    image: 'imgs/members/autumnkwon.jpg',
  },
  {
    name: 'Dong Jin (Matthew) Park',
    type: 'MarkOps',
    title: 'Business Lead',
    link: 'https://www.linkedin.com/in/dong-jin-matthew-park-6a63bb11a/',
    image: 'imgs/members/dongjin.jpg',
  },
  {
    name: 'Anushka Kulshreshtha',
    type: 'MarkOps',
    title: 'Business Operator',
    link: 'https://www.linkedin.com/in/anushkakulshreshtha/',
    image: 'imgs/members/BuddhimaanChanakya.jpg',
  },

  {
    name: 'Duy Duong',
    type: 'Alumni',
    title: 'Former Director of Business Operations',
    link: 'https://www.linkedin.com/in/duongduy',
    image: 'imgs/members/duy.jpg',
  },
  {
    name: 'Sooji Son',
    type: 'Alumni',
    title: 'Former Director of Design',
    link: 'http://www.linkedin.com/in/soojison',
    image: 'imgs/members/sooji.jpg',
  },
  {
    name: 'Prabir Pradhan',
    type: 'Alumni',
    title: 'Former Director of Engineering: Android',
    link: 'https://www.linkedin.com/in/prabirmsp',
    image: 'imgs/members/prabir.jpg',
  },
  {
    name: 'Ziwen Chen',
    type: 'Alumni',
    title: 'Former Director of Engineering: iOS',
    link: 'https://www.linkedin.com/in/ziwen-chen-359b24131/',
    image: 'imgs/members/ziwen.jpg',
  },
  {
    name: 'Linqing Peng',
    type: 'Alumni',
    title: 'Former Director of Engineering: iOS',
    link: 'https://www.linkedin.com/in/linqingpeng',
    image: 'imgs/members/linqing.jpg',
  },
  {
    name: 'Eli Salm',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'https://www.linkedin.com/in/eli-salm-58b136115',
    image: 'imgs/members/eli.jpg',
  },
  {
    name: 'Addison Gould',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link:
      'https://www.linkedin.com/in/addison-gould-7b9430111?trk=nav_responsive_tab_profile_pic',
    image: 'imgs/members/addison.jpg',
  },
  {
    name: 'Devin Dooley',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'https://www.linkedin.com/in/devin-dooley',
    image: 'imgs/members/devin.jpg',
  },
  {
    name: 'Mike Zou',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'www.linkedin.com/in/mizkoeu',
    image: 'imgs/members/mike.jpg',
  },
  {
    name: 'Kamal Nadesan',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: '#',
    image: 'imgs/members/kamal.jpg',
  },
  {
    name: 'Mattori Birnbaum',
    type: 'Alumni',
    title: 'Former Director of Engineering: Android',
    link: 'https://www.linkedin.com/in/mattori-birnbaum-221451a3',
    image: 'imgs/members/mattori.jpg',
  },
  {
    name: 'Matt Murphy',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/matt-murphy-84888b106',
    image: 'imgs/members/matt.jpg',
  },
  {
    name: 'Otabek Nazarov',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/otabek-nazarov-a0429911',
    image: 'imgs/members/otabek.jpg',
  },
  {
    name: 'Jemuel Santos',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: ' https://www.linkedin.com/in/jemuel-santos-4a8b30120',
    image: 'imgs/members/jemuel.jpg',
  },
  {
    name: 'Linh Pham',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/linh-pham-b72a3bbb',
    image: 'imgs/members/linh.jpg',
  },
  {
    name: 'Jacob Ekstrand',
    type: 'Alumni',
    title: 'Former Android Developer',
    link:
      'https://www.linkedin.com/in/jacob-ekstrand-b99289127?trk=hp-identity-photo',
    image: 'imgs/members/jacob.jpg',
  },
  {
    name: 'Nikunj Agrawal',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/agrawaln',
    image: 'imgs/members/nikunj.jpg',
  },
  {
    name: 'Aditi Munshi',
    type: 'Alumni',
    title: 'Former Services Engineer',
    link: 'https://www.linkedin.com/in/aditi-munshi-a0148a10a',
    image: 'imgs/members/aditi.jpg',
  },
  {
    name: 'Zander Otavka',
    type: 'Alumni',
    title: 'Former Director of Engineering: Services',
    link: '#',
    image: 'imgs/members/zander.jpg',
  },
  {
    name: 'Cameron Quinn Chen',
    type: 'Alumni',
    title: 'Former UI Designer',
    link:
      'https://www.linkedin.com/in/cameron-chen-8847b1111?trk=hp-identity-name',
    image: 'imgs/members/cameron.jpg',
  },
  {
    name: 'Anaan Ramay',
    type: 'Alumni',
    title: 'Former UI Designer',
    link:
      'https://www.linkedin.com/in/anaan-ramay-b8b96a3b?trk=hp-identity-name',
    image: 'imgs/members/anaan.jpg',
  },
  {
    name: 'Mama Ampofo-Tenkorang',
    type: 'Alumni',
    title: 'Former UI Designer',
    link:
      'https://www.linkedin.com/in/mama-yaa-biamah-ampofo-tenkorang-537b19b7',
    image: 'imgs/members/mama.jpg',
  },
  {
    name: 'Kevin Nguyen',
    type: 'Alumni',
    title: 'Former Community Builder',
    link: '#',
    image: 'imgs/members/kevin.jpg',
  },
  {
    name: 'Katie Herbert',
    type: 'Alumni',
    title: 'Former Community Builder',
    link: '#',
    image: 'imgs/members/katie.jpg',
  },
  {
    name: 'Larry Boateng Asante',
    type: 'Alumni',
    title: 'Former Director of Engineering: Android & Education',
    link: 'http://www.linkedin.com/in/larryboatengasante/',
    image: 'imgs/members/larry.jpg',
  },
  {
    name: 'Alex Mitchell',
    type: 'Alumni',
    title: 'Former Director of Engineering: iOS & Backend Services',
    link: 'https://www.linkedin.com/in/alexthemitchell',
    image: 'imgs/members/alex.jpg',
  },
  {
    name: 'Samee Zahid',
    type: 'Alumni',
    title: 'Former Director of Product',
    link: 'http://www.linkedin.com/in/samee24',
    image: 'imgs/members/samee.jpg',
  },
  {
    name: 'Ajuna Kyaruzi',
    type: 'Alumni',
    title: 'Former Administrative Outreach',
    link: 'https://www.linkedin.com/in/ajunakyaruzi',
    image: 'imgs/members/ajuna.jpg',
  },
  {
    name: 'Sarah Trop',
    type: 'Alumni',
    title: 'Former Director of Design',
    link: 'http://www.linkedin.com/pub/sarah-trop/85/b1b/252',
    image: 'imgs/members/sarah.jpg',
  },
  {
    name: 'Mark Schwabacher',
    type: 'Alumni',
    title: 'Former Director of Business Operations',
    link: 'https://www.linkedin.com/pub/mark-schwabacher/91/860/23',
    image: 'imgs/members/mark.jpg',
  },
  {
    name: 'Ruth Wu',
    type: 'Alumni',
    title: 'Former Services Engineer and UI Designer',
    link: 'http://www.linkedin.com/in/wuruth',
    image: 'imgs/members/ruth.jpg',
  },
  {
    name: 'Nicolas Knoebber',
    type: 'Alumni',
    title: 'Former Services Engineer',
    link: '#',
    image: 'imgs/members/nick.jpg',
  },
  {
    name: 'Alex French',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'http://www.linkedin.com/in/alexgfrench',
    image: 'imgs/members/alexfrench.jpg',
  },
  {
    name: 'Jarren Santos',
    type: 'Alumni',
    title: 'Former Community Builder',
    link: 'https://www.linkedin.com/in/jarrenls',
    image: 'imgs/members/jarren.jpg',
  },
  {
    name: 'Madeleine Hardt',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: ' https://www.linkedin.com/in/madeleine-hardt',
    image: 'imgs/members/maddy.jpg',
  },
  {
    name: 'Yazan Kittaneh',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/yazankittaneh',
    image: 'imgs/members/yazan.jpg',
  },
  {
    name: 'Marcel Champagne',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/champagnemarcel',
    image: 'imgs/members/marcel.jpg',
  },
  {
    name: 'Tyler Dewey',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: '#',
    image: 'imgs/members/ty.jpg',
  },
  {
    name: 'Shaun Mataire',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'https://www.linkedin.com/pub/shaun-mataire/76/226/46a',
    image: 'imgs/members/shaun.jpg',
  },
  {
    name: 'Tiffany Nguyen',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/nguyenti',
    image: 'imgs/members/tiffany.jpg',
  },
  {
    name: 'Albert Owusu-Asare',
    type: 'Alumni',
    title: 'Former Android Developer',
    link: 'https://www.linkedin.com/in/albertowusuasare',
    image: 'imgs/members/albert.jpg',
  },
  {
    name: 'Doyi Lee',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: 'https://www.linkedin.com/in/doyilee ',
    image: 'imgs/members/doyi.jpg',
  },
  {
    name: 'Alex Greenberg',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: '#',
    image: 'imgs/members/alexg.jpg',
  },
  {
    name: 'Chloe Williams',
    type: 'Alumni',
    title: 'Former Community Builder',
    link: '#',
    image: 'imgs/members/chloe.jpg',
  },
  {
    name: 'Anita DeWitt',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: 'http://www.linkedin.com/in/wuruth',
    image: 'imgs/members/anita.jpg',
  },
  {
    name: 'Henry Fisher',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'https://www.linkedin.com/pub/henry-fisher/79/346/67',
    image: 'imgs/members/henry.jpg',
  },
  {
    name: 'Lea Marolt Sonnenschein',
    type: 'Alumni',
    title: 'Former iOS Lead',
    link: 'http://si.linkedin.com/in/leamarolt',
    image: 'imgs/members/lea.jpg',
  },
  {
    name: 'Patrick Triest ',
    type: 'Alumni',
    title: 'Former Android Lead',
    link: 'http://www.linkedin.com/in/triestpa',
    image: 'imgs/members/patrick.jpg',
  },
  {
    name: 'Nathalie Ford ',
    type: 'Alumni',
    title: 'Former Administrative Coordinator',
    link: 'http://www.linkedin.com/in/nathalieford',
    image: 'imgs/members/nathalie.jpg',
  },
  {
    name: 'Caleb Sponheim',
    type: 'Alumni',
    title: 'Former Design Lead',
    link: 'http://www.linkedin.com/in/calebsponheim',
    image: 'imgs/members/caleb.jpg',
  },
  {
    name: 'Daniel Goldstein',
    type: 'Alumni',
    title: 'Former Android Developer',
    link:
      'http://www.linkedin.com/profile/view?id=228784400&trk=nav_responsive_tab_profile_pic',
    image: 'imgs/members/danielG.jpg',
  },
  {
    name: 'Daniel Torres',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link:
      'https://www.linkedin.com/profile/view?id=239234651&trk=nav_responsive_tab_profile',
    image: 'imgs/members/danielT.jpg',
  },
  {
    name: 'Chris Lee',
    type: 'Alumni',
    title: 'Former UX Researcher',
    link:
      'https://www.linkedin.com/profile/view?id=154641649&trk=nav_responsive_tab_profile_pic',
    image: 'imgs/members/chris.jpg',
  },
  {
    name: 'Hannah Cohn',
    type: 'Alumni',
    title: 'Former UX Researcher',
    link: '#',
    image: 'imgs/members/hannah.jpg',
  },
  {
    name: 'Lexy Greenwell',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: 'http://www.linkedin.com/in/alexisgreenwell',
    image: 'imgs/members/lexy.jpg',
  },
  {
    name: 'Patrick Slough',
    type: 'Alumni',
    title: 'Former iOS Developer',
    link: 'https://www.linkedin.com/pub/patrick-slough/a4/165/94a',
    image: 'imgs/members/patrickS.jpg',
  },
  {
    name: 'Ezra Edgerton',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: '#',
    image: 'imgs/members/ezra.jpg',
  },
  {
    name: 'Maijid Moujaled',
    type: 'Alumni',
    title: 'Former iOS Lead and Founder',
    link: '#',
    image: 'imgs/members/maijid.jpg',
  },
  {
    name: 'David Cowden',
    type: 'Alumni',
    title: 'Former Android Lead and Founder',
    link: '#',
    image: 'imgs/members/david.jpg',
  },
  {
    name: 'Christine Tran',
    type: 'Alumni',
    title: 'Former UI Designer',
    link: '#',
    image: 'imgs/members/christine.jpg',
  },
  {
    name: 'Spencer Liberto',
    type: 'Alumni',
    title: 'Former Android Develope and Founder',
    link: '#',
    image: 'imgs/members/spencer.jpg',
  },
  {
    name: 'Colin Tremblay',
    type: 'Alumni',
    title: 'Former iOS Developer and Founder',
    link: '#',
    image: 'imgs/members/colin.jpg',
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
  let type = data[i].type;
  if (data[i].type === 'Leadership') {
    projectLink.className = `project ${type}`;
  } else {
    projectLink.className = `project ${type} invisible`;
  }
  projectLink.target = 'blank';
  projectLink.dataset.type = data[i].type;

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
  console.log(Array.from(obs));
  obs = document.getElementsByClassName(filter);
  setTimeout(() => {
    //makes selected buttons visible
    Array.from(obs).forEach((ob) => {
      if (filter === ob.dataset.type) {
        ob.classList.remove('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 150);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
