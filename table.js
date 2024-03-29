const navSlide = () => {
   const menuIcon = document.querySelector('#menu-icon');
   const nav = document.querySelector('.navbar');
   const navbar = document.querySelectorAll('.navbar li');

   menuIcon.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navbar.forEach((link, index) => {

         if (link.style.animation) {
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.3}s`;
         }
      });
   });

   
}

navSlide();




 window.addEventListener("load", () => {
   autoSlide();
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");

   // check if toIndex exceeds the number of carousel items
   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   }

   const newItemActive = itemsArray[toIndex];

   // start transition
   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
   }, 20);

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
   }, {
      once: true
   });
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

document.getElementById('phone-btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

$(document).ready(function(){
   if($( window ).width() < 500){
       $("#changeMe").text("Start");
   }else{
       $("#changeMe").text("Käfer Oldie");
   }
});
$( window ).resize(function() {
	if($( window ).width() < 500){
       $("#changeMe").text("Start");
   }else{
       $("#changeMe").text("Käfer Oldie");
   }
   
});