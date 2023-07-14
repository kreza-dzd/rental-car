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


document.addEventListener("DOMContentLoaded", function() {
   var defaultCheckinDate = new Date();
   defaultCheckinDate.setHours(9);
   defaultCheckinDate.setMinutes(0);
   defaultCheckinDate.setSeconds(0);

   var defaultCheckoutDate = new Date();
   defaultCheckoutDate.setHours(8);
   defaultCheckoutDate.setMinutes(0);
   defaultCheckoutDate.setSeconds(0);

   flatpickr("#checkin", {
       enableTime: true,
       dateFormat: "Y-m-d H:i",
       defaultDate: defaultCheckinDate,
       time_24hr: true,
   });
   flatpickr("#checkout", {
       enableTime: true,
       dateFormat: "Y-m-d H:i",
       defaultDate: defaultCheckoutDate,
       time_24hr: true,
   });
});













