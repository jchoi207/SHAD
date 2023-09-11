const introduction = document.querySelector(".introduction");
const menu_alpha = document.querySelector(".menu_alpha");
const menu_beta = document.querySelector(".menu_beta");
const header = document.querySelector(".header");

const tl = new TimelineMax();

tl.fromTo(menu_alpha, 1, {width: "55%"}, {width: "100%", ease: Power2.easeInOut}); 
tl.fromTo(menu_beta, 1, {width: "0%"}, {width: "100%", ease: Power2.easeInOut}, "-=1.5"); 
tl.fromTo(header, 1, {x: "-200%"}, {x:"0%", ease: Power2.easeInOut}, "-=1");