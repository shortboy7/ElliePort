'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
document.addEventListener('scroll', () =>{
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	}else{
		navbar.classList.remove('navbar--dark');
	}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e) =>{
	console.log(e.target.dataset.link);
	const target = e.target;
	const link = target.dataset.link;
	if (link == null) {
		return ;
	}
	scrollIntoView(link);
});

//Handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', ()=>{
	scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
	if(window.scrollY >= (homeHeight / 2)) {
		arrowUp.classList.add('visible');
	}else {
		arrowUp.classList.remove('visible');
	}
})

arrowUp.addEventListener('click', () => {
	scrollIntoView('#home');
});

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelector('.project');
workBtnContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) return ;
	projectContainer.classList.add('anim-out');

	// RM selection from previous item and select the
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	e.target.classList.add('selected');

	setTimeout(()=>{
		projects.forEach((project) => {
			if (filter === '*' || filter === project.dataset.type) {
				project.classList.remove('invisible');
			}else {
				project.classList.add('invisible');
			}
		});
		projectContainer.classList.remove('anim-out');
	},300);
	console.log(filter);
})

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
	navbarMenu.classList.toggle('open');
});


function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({behavior:'smooth'});
}

