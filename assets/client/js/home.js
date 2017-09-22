$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();

    let animateTopBar = () => {
        let offset = $(window).scrollTop();
        let topNav = $('.top-nav');
        if (offset > 0) {
            topNav.addClass("scroll-color");
            $(".top-nav").css('background', 'white');
        } else {
            topNav.removeClass("scroll-color");
            $(".top-nav").css('background', 'rgba(255, 255, 255, 0.01)');
            }
    }

    animateTopBar();
    $(window).scroll(animateTopBar);

    // smooth scroll animations
    $("a:not(.no-scroll)").click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
            });
        }
    });

    $("about").scrollTop($("about").css('position', 'fixed'));

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('about', '/client/styles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

});
