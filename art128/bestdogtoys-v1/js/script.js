 document.addEventListener('DOMContentLoaded' , function() {

   // TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click' , function() {
      if (menunav.getAttribute('data-navstate') === 'open') {
         // if true do this
         menunav.setAttribute('data-navstate' , 'closed');
      } else {
         // else (if false) do this:
         menunav.setAttribute('data-navstate' , 'open');
      };

    });
   // STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
   const stickynavlinks = document.querySelectorAll('.sticky nav a');
   console.log(stickynavlinks);
    //COMMENT: NEED TO ADD LOOP ON EACH A ON CLICK

 });