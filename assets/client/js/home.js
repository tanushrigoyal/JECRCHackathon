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
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particle', '/client/styles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


$(".my-btn-front-1").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Attendance of the students</h4><ol><li>In manual process it creates possibility of delicacy and in correction.</li><li>Transparency of the attendance is not ensured.</li><li>Parents does not have the information of attendance of their ward.</li><li>Single point Attendance summary.</li><li>Activity Attendance and Medical considerations.</li><li>Debarred list creations.</li></ol></div>');
});

$(".my-btn-front-2").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Salary Assessment, Processing and Increment</h4><ol><li>Salary statement is not shared with particular faculties. Which affect correctness of the statement.</li><li>CL & CCL calculations and allotment.</li><li>Salary components with the rules of increment.</li><li>Digital Faculty appraisal process according uniform increment process.</li><li>Feedback/Complaint management with resolution.</li><li>Single point Attendance summary.</li><li>Activity Attendance and Medical considerations.</li></ol></div>');
});

$(".my-btn-front-3").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Time Table of the department</h4><ol><li>Time table has many modifications during run. Multiple copies creates confusion many times.</li><li>Parents have complaint regarding the class schedule. It should also be shared till their ends.</li><li>Many times interdepartmental clashing also occurs in manual workings.</li><li>College should have a central level time table which can be monitored or taken care while creating any college level activity.</li></ol></div>');
});

$(".my-btn-front-4").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Result Analysis</h4><ol><li>Report card generation and sharing of the same after each internal and external exams.</li><li>Feedback of exam and respective question paper should also be processed.</li><li>Many times interdepartmental classing also occurs in manual workings.</li><li>College should have a central level time table which can be monitories or taken care while creating any college level activity.</li></ol></div>');
});

$(".my-btn-front-5").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Notice Board</h4><ol><li>Many notices are being teared off before due dates.</li><li>Parents are not aware about the notices.</li><li>Interdepartmental classing of notices.</li></ol></div>');
});

$(".my-btn-front-6").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Cleaning / dusting management with feedback and complaint management</h4></div>');
});

$(".my-btn-front-7").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Presence of Faculty and Staff should be maintained with transparency</h4></div>');
});

$(".my-btn-front-8").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Road Safety in JECRC Campus</h4></div>');
});

$(".my-btn-front-9").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Women Safety in JECR Campus</h4></div>');
});

$(".my-btn-front-10").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Ant ragging management in JECR Campus including feedback/complaint of the issues</h4></div>');
});

$(".my-btn-front-11").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>Syllabus coverage mapping with classes held</h4></div>');
});

$(".my-btn-front-12").click(function (e) {
    $(".my-front").css('transform' , 'rotateY(-180deg)');
    $(".my-back").css('transform' , 'rotateY(0)');
    $('.back-content').remove();
    $(".my-back").append('<div class="back-content"><h4>College ID card management</h4></div>');
});

$(".my-btn-back").click(function (e) {
    $(".my-back").css('transform' , 'rotateY(-180deg)');
    $(".my-front").css('transform' , 'rotateY(0)');
});

/*CLOCK
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / (1000 * 60 * 60) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining("2017-12-25");

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("clockdiv", deadline);*/
 
/*Time Circle*/ 
$(".example").TimeCircles({animation: "smooth",circle_bg_color: "#000000",fg_width: 0.05 ,bg_width: 0.5 ,direction: "Clockwise"}); 

});
