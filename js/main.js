
// toggle style switcher 

let styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// hide style witcher by scroling 

window.addEventListener("scroll", () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

// theme color 

let altStyles = document.querySelectorAll('.alt-style');
function setActiveStyle (color) {
  altStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  })
}

// dark light mood 

let dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
}) 
window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');

  }
})

// typing animation 

var typed = new Typed(".typing", {
	strings:["", "Web Designer", "Front-end Developer"],
	typeSpeed:100,
	BackSpeed:60,
	loop:true,
});

// aside 
let nav = document.querySelector('.nav');
let navList = nav.querySelectorAll('li');
let totalNavList = navList.length;
let allSection = document.querySelectorAll(".section");
let totalSection = allSection.length;

  for(let i=0; i < totalNavList; i++) {
  	let a = navList[i].querySelector("a");
  	a.addEventListener('click', function () {
  		removeBackSection();
  		 for (let j = 0; j < totalNavList; j++) {
  			if(navList[j].querySelector("a").classList.contains('active')) {
  				addBackSection(j); 
  				// allSection[j].classList.add('back-section');
  		  }
  			navList[j].querySelector("a").classList.remove('active');
  		 }
  		this.classList.add('active');
  		showSection(this);
  		if(window.innerWidth < 1200) {
  				asideSectionTogglerBtn();
  		}
  	})
  }

  function removeBackSection() {
  	for (let i = 0; i < totalSection; i++) {
  		allSection[i].classList.remove("back-section");
  	}
  }

  function addBackSection(num) {
  				 allSection[num].classList.add('back-section');
  }

  function showSection(element) {
  	for(let i=0; i < totalSection; i++) {
     	allSection[i].classList.remove("active");
  	}
  	let target = element.getAttribute('href').split('#')[1];
  	document.querySelector("#" + target).classList.add('active');
  }

  function updateNav(element) {
  		for (let i = 0; i < totalNavList; i++) {
  				navList[i].querySelector('a').classList.remove('active');
  				let target = element.getAttribute('href').split('#')[1];

  				if (target === navList[i].querySelector("a").getAttribute("href").split('#')[1]) {
  						navList[i].querySelector("a").classList.add("active");
  				}
  		}
  }

  document.querySelector('.hire-me').addEventListener('click', function () {
  	 let sectionIndex = this.getAttribute("data-section-index");
  		showSection(this);
  		updateNav(this);
  		removeBackSection();
  		addBackSection(sectionIndex);
  })

  // toggler show 

  let navTogglerBtn = document.querySelector(".nav-toggler");
  let aside = document.querySelector(".aside");

  navTogglerBtn.addEventListener("click", () => {
  	asideSectionTogglerBtn();
  })

  function asideSectionTogglerBtn() {
  	aside.classList.toggle("open");
  	navTogglerBtn.classList.toggle('open');

  	for (let i = 0; i < totalSection; i++) {
  		allSection[i].classList.toggle('open')
  	}
  }
