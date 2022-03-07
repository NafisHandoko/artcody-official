$(document).ready(function(){
    var height = $(document).height();
    $('#vertical-line').css('height', `${0.94*height}px`)
})

$(window).resize(function(){
    var height = $(document).height(); // or $(window).height()
});

$(document).scroll(function () {
    var $nav = $("#nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

var typed = new Typed('#role-text', {
    strings: ['Engineer.', 'Graphic Designer.', 'Web Developer.', 'Photographer.'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50
});