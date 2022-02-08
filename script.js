$( document ).ready(function(){
  $(".hamburger").on('click', function(){
    $(".menu").toggleClass("menu--open");
  });
});
ScrollReveal().reveal('.reveal', { distance: '50px' ,  duration: 750, easing: 'cubic-bezier(.215,.61,.355,1)',  interval: 500 });
ScrollReveal().reveal('.zoom', { duration: 850, easing: 'cubic-bezier(.215,.61,.355,1)',  interval: 200, mobile: false});
