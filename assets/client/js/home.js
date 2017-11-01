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

            $(".top-nav").css('background', 'rgba(0, 0, 1, .2)');

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

// particlesJS.load('particle', '/client/styles/particles.json', function() {

//   console.log('callback - particles.js config loaded');

// });





$('.box').hide();

//$('.cross').hide();

$('.add').show();



// Make sure all the elements with a class of "clickme" are visible and bound

// with a click event to toggle the "box" state

$('.clickme').each(function() {

    $(this).show(0).on('click', function(e) {

        // This is only needed if your using an anchor to target the "box" elements

        e.preventDefault();



        // Find the next "box" element in the DOM

        $(this).next('.box').slideToggle('fast');

        if ($(this).find('i').text() == 'add_circle'){

        $(this).find('i').text('cancel');

    } else {

        $(this).find('i').text('add_circle');

    }

});

});







$(".my-btn-front-1").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Agricultural Productivity</h4><p>India has already been self sufficient in rice production. But this is not enough. To keep pace with population growth, all agricultural production, including rice has to be doubled. At the same time, to achieve sustainable development goals, income of small-scale food producers, specially women, indigenous peoples, family farmers, pastoralists, and fishers have to be doubled. But there exists some problem to realize these goals. To meet the housing and other demand of increasing population, the quantity of arable land is decreasing day by day. We have to save these lands. It has to make sure that arable land would only be used in cultivation. Minimum and fair wage of all labour involved in agriculture should be confirmed regardless their gender. All the agricultural inputs including seeds, fertilizer, irrigation should be made available. Farmers should get bank loan and other financial services. They should be taught scientific method of cultivation. Invention of high yielding seeds has to be accelerated. And concentration should be given to invent more flood and drought resistant variety of different crops. Marketing of cultivated crops has to be confirmed. The land rights of indigenous people have to be settled. Women should be more involved in agriculture. To increase fish production, all the water bodies, including ponds, haors should bring under fish cultivation. And for this, developed variety of fishes, scientific cultivation method, fair price, training and marketing should be ensured. And by confirming all these, we can reach the target to double the agricultural production by 2030.</p></div>');

});



$(".my-btn-front-2").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Newborns and Children</h4><p>According to a UNICEF report of 2014, the death rate of child under 5 years in India is 46 per 1000, in 1993 which was 133. But this is not satisfactory. And new targets have already been set. This death rate has to take down to 25 per 1000 to achieve Sustainable Development Goal of United Nations by 2030, which is almost half of a current rate. At the same time, the death rate of newly born has to bring down to 12 per 1000. To achieve these targets we have to overcome a number of challenges. The very first challenge is the lack of awareness among common people. For the lack of proper education and information, they are not aware of these issues. A large part of common people are still superstitious. Instead of going to hospital for child delivery, they prefer unskilled midwives which take the lives of both mother and child to risk. Besides, there are some other problems, including not taking proper care of pregnant women, avoiding vaccination of the newly born infant. To reduce child death rate, pregnant women should be taken good care. Nutritious food, regular health checkup for new mothers and vaccination, breastfeeding, proper food for newly born should be ensured. These will make sure to attain all the targets by 2030.</p></div>');

});



$(".my-btn-front-3").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Road Traffic Accidents</h4><p>India has promised to reduce the number of road accidents to half between 2011 to 2020. But there is no great development yet. According to a statistic of a Bangladesh Jatri Kallyan Samitee, road accidents killed more than 8 and half thousand people only in 2015. To reach the target of United Nations for reducing the number of road accidents to half, we have to overcome a good number of challenges. According to the specialists opinion, there are many reasons of occurring a road accident including ignorance of drivers and passengers regarding traffic law, untrained drivers, vehicle without fitness, unmarked road, driving different speed vehicles in the same lane, occupying road and footpath illegally, uncontrolled road crossing by pedestrians, not using foot over bridge, overtaking tendency of drivers, driving from the wrong side, driving in deep fog, competition between vehicles to go faster, unawareness of passengers, carrying too much weight, driving by helpers etc. Besides, the faulty road construction, mechanical fault of vehicles, slow speed in highway, not abiding traffic rules, using mobile or headphones while driving are some other reasons of road accidents. We must have to solve these problems to achieve the target of reducing road accidents to half by 2020.</p></div>');

});



$(".my-btn-front-4").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Qualified Teachers in Education</h4><p>There exists no alternative of quality education for sustainable development. And for that, developed educational institutions are necessary along with qualified teachers. We have a less number of good quality teachers in our country than the original demand. To achieve Sustainable Development Goals by 2030, we need to substantially increase the number of qualified teachers. Understated tasks are to be done to accomplish this goal. At first, all current teachers should be properly trained. Lucrative salary and a good lifestyle have to be ensured for those teachers who are working in rural areas. That will help meritorious students to decide to be a teacher in the future. Teachers should be provided with all necessary books, research lab and informations. There should have incentives for skilled teachers. Enough budget should be allocated for higher research. Avoiding all illegal powers, the best candidate should be recruited as teacher. And they should be trained through international cooperation in teacher training. Their social status should be upgraded.</p></div>');

});



$(".my-btn-front-5").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Violence Against Women</h4><p>Development cannot take place if any nation or society leaves the women behind.But violence against women is increasing worldwide at an alarming rate. According to a statistic of World Health Organization, One in every three women is being tortured or sexually harassed worldwide by their partners. All forms of violence against all women and girls in the public and private spheres, including trafficking, sexual and other types of exploitation should be eliminated. Bangladeshi women are facing various kinds of violence against them, including torture and killing for dowry, rape, sexual harassment, acid violence, physical and mental torture and sex trafficking. Violence towards women destroys family stability, which has adverse effects on the next generation. It compels a woman to leave her job which decreases the growth of a family and increase health expenditure. So, at any cost proper steps should be taken to eliminate all forms of violence against women. Otherwise Sustainable Development Goals can not be achieved.</p></div>');

});



$(".my-btn-front-6").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Energy Efficiency</h4><p>Gas and other gaseous products are the main energy source of Bangladesh. And the reserve of gas is decreasing extensively. But the economic development will be affected if energy demand cannot be met. So, the rate of progress in energy efficiency has to be doubled by the year of 2030. To do so, we have to concentrate on saving household energy consumption. Light, fan, TV, fridge should be switched off after using. Unnecessary electricity and gas consumption has to be stopped. Energy efficient electric tools should be made available. System loss or illegal connection has to be eliminated to zero. At the same time, proper steps should be taken in energy research and technology expansion among common people. And people should make aware of this issue</p></div>');

});



$(".my-btn-front-7").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append("<div class='back-content'><h4>Sustainable Tourism</h4><p>To achieve Sustainable Development Goals by 2030, we need to create employment opportunities along with making policy to promote our own culture and products through sustainable tourism. We have to overcome a numerous challenges to fulfil the target. To face the challenges of tourism, it is essential to take a national master plan. We don't have that master plan. We are not familiar with \"Community Tourism\" in our country. There is no coordination between the travel agencies and tour operators. Here in Bangladesh, lack of security for the tourist is the biggest problem. We don't even have enough information regarding our tourism. There is a very limited source to know about the tourist spots. We don't even know how many tourist spots are here, let alone the foreign tourists. People, who are associated with the tourism industry don't have efficiency in English language. Event calendar doesn't exist here. That's why we just don't have any idea about what kind of program is going to be held throughout the year. Effective initiative hasn't taken yet to promote the tourism based product. If we can overcome all these problems, our tourism goals will be achieved by the year 2030.</p></div>");

});



$(".my-btn-front-8").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Environment in City</h4><p>By the year 2030, the adverse per capita environmental impact of cities has to be reduced. Special attention should be given to air quality and municipal and other waste management. And we have to overcome a great deal of challenges for that. All the pollution of cities has to be reduced. Emission of smokes from vehicles and different industries are taking the air pollution to the next level. Measures should be taken to keep the emission level in control. Sound pollution is another phenomenon which iis actively contributing in deterioration of city environment. Sounds produced by vehicles are affecting child, older persons and patients adversely. A big number of industries including ready-made garment factories are being constructed all over the city. These all are responsible for environmental pollution of cities. Waste dumping in every place should be stopped. Citizens should be inspired to use dustbins to dump waste.</p></div>');

});



$(".my-btn-front-9").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Marine Resources</h4><p>Fishermen should have the chance of collecting marine resources and selling these to the local market. It is necessary to stop excessive and illegal fishing in order to keep balance of the aquatic environment. By 2020, we need to have control of using land for farming. By executing national and international laws, at least 10% of the coastal and marine areas have to be protected. To do so, at first it is required to protect the living area of fishes. Fishers are to be trained. It is important to create awareness among them. They should be provided with loans at low-interest rate to overcome poverty. If required they should be given interest-free loans as well. During the time of breeding, fishing should be banned. Netting \'Jatka\' and immature fish should also be declared illegal. Using of current net should be banned strictly. Market management for the fishers has to be confirmed.</p></div>');

});



$(".my-btn-front-10").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Attendance of the students</h4><ol><li>In manual process it creates possibility of delicacy and in correction.</li><li>Transparency of the attendance is not ensured.</li><li>Parents does not have the information of attendance of their ward.</li><li>Single point Attendance summary.</li><li>Activity Attendance and Medical considerations.</li><li>Debarred list creations.</li></ol></div>');

});



$(".my-btn-front-11").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Salary Assessment, Processing and Increment</h4><ol><li>Salary statement is not shared with particular faculties. Which affect correctness of the statement.</li><li>CL & CCL calculations and allotment.</li><li>Salary components with the rules of increment.</li><li>Digital Faculty appraisal process according uniform increment process.</li><li>Feedback/Complaint management with resolution.</li><li>Single point Attendance summary.</li><li>Activity Attendance and Medical considerations.</li></ol></div>');

});



$(".my-btn-front-12").click(function (e) {

    $(".my-front").css('transform' , 'rotateY(-180deg)');

    $(".my-back").css('transform' , 'rotateY(0)');

    $('.back-content').remove();

    $('.my-btn-back').css('display' , 'inline-block');

    $(".my-back").append('<div class="back-content"><h4>Result Analysis</h4><ol><li>Report card generation and sharing of the same after each internal and external exams.</li><li>Feedback of exam and respective question paper should also be processed.</li><li>Many times interdepartmental classing also occurs in manual workings.</li><li>College should have a central level time table which can be monitories or taken care while creating any college level activity.</li></ol></div>');

});



$(".my-btn-back").click(function (e) {

    $(".my-back").css('transform' , 'rotateY(180deg)');

    $(".my-front").css('transform' , 'rotateY(0)');

    $('.my-btn-back').css('display' , 'none');

});



// When the user clicks on the button, open the modal 

document.getElementById("t-c").onclick = function() {

    document.getElementById('container-t-c').style.display = "block";

    }



// When the user clicks on <span> (x), close the modal

    document.getElementsByClassName("t-c-close")[0].onclick = function() {

    document.getElementById('container-t-c').style.display = "none";

}



// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {

    if (event.target == document.getElementById('container-t-c')) {

        document.getElementById('container-t-c').style.display = "none";

   }

}

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



$(window).resize(function(){

    $("#timer").TimeCircles().rebuild();

});



});

