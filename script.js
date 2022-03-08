$(document).ready(function(){
    // var height = $(document).height();
    var height = document.getElementById('footer').offsetTop
    $('#vertical-line').css('height', `${1*height}px`)
})

$(window).resize(function(){
    var height = $(document).height(); // or $(window).height()
});

$(document).scroll(function () {
    var $nav = $("#nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    var current = "";
    var sections = document.querySelectorAll('.navlink-target')
    var navLi = document.querySelectorAll('.navlink-li')
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("navlink-active");
      if (li.classList.contains(current)) {
        li.classList.add("navlink-active");
      }
    });
});

var typed = new Typed('#role-text', {
    strings: ['Engineer.', 'Graphic Designer.', 'Web Developer.', 'Photographer.'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50
});

// window.onscroll = () => {
//     var current = "";
//     $('section').forEach((section) => {
//       const sectionTop = section.offsetTop;
//       if (scrollY >= sectionTop ) {
//         current = section.getAttribute("id"); }
//     });
  
//     $('li').forEach((li) => {
//       li.classList.remove("navlink-active");
//       if (li.classList.contains(current)) {
//         li.classList.add("navlink-active");
//       }
//     });
//   };
  