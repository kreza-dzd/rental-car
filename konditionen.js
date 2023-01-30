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


 document.getElementById("myButton").onclick = function () {
   location.href = "formular.html";

};
 
 