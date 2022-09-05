
var swiper = new Swiper('.mySwiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	}, 


    }); 
	/*
let intervalo = null;
let step = 1;
const carrusel = document.querySelector(".swiper-wrapper")
const swiper2 = document.querySelector(".mySwiper")
let maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
const start = () =>{
	intervalo = setInterval(function(){
		swiper2.scrollLeft = swiper2.scrollLeft + step;
		console.log("solo", step, swiper2.scrollLeft)
		if(carrusel.scrollLeft === maxScroll){
			step = step * -1;
			console.log("Entra if")
		}
		else if (carrusel.scrollLeft === 0.0){
			step = 1;
			console.log("Entra else if")
		}
		console.log(maxScroll, " ", carrusel.scrollLeft, " ", step)
	}, 10)
};

const stop = () =>{};
start();*/