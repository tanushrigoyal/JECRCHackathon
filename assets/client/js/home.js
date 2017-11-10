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



    $(".my-back").append('<div class="back-content"><h4>Air and Water Quality Care System</h4><p>Real time data of various air/water quality parameters in the selected urban and rural area and the river flow (major Indian rivers) information will be extracted through web/cloud based tools. Based on the expertise developed by CSIR (CSIR-IITR) over four decades on air and water quality monitoring and assessment, data analytical methods will be developed to quantify source apportionment to protect human health and environmental pollution/quality. A smart support system will be developed by collecting and comparing available past years data for those localities to provide preventive solutions.</p></div>');



});







$(".my-btn-front-2").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Chronicle – stories of India’s international trade</h4><p>History has been modulated by trade significantly- both as the means and also as end of human efforts. Trade was the medium of transmission of cultural influence, best practices, language and also introduction of new species- plants, animals fashion and technology across world. Stories related to international trade – have been documented through books. An online effort to document stories, historical facts and anecdotes of India’s international trade, will boost interest in trade.</p></div>');



});







$(".my-btn-front-3").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Group Messaging Solution</h4><p>Evaluation of a group messaging solution between senior executives of a group of organizations and concerned ministry’s workforce. The solution should be secure and only encrypted messages should be allowed, with no uploading of any file. The solution should support Group conference. Development of a shared & secure messaging solution between Top Management of a group of organisations. Important discussions, plans can be discussed. Messages to be encrypted while sending & retrieving. The Messaging server can be kept in ministry. The Messaging client can be installed on Top Management’s Laptops. Users of this system: Top management of relevant organizations and ministry’s executives. Technology that can help address the issue: A solution on the template of Google hangouts which can support group messaging between two executives as well as group messaging. Desired Solution : A safe and secure professional communication between two people or a group of people when needed.</p></div>');



});







$(".my-btn-front-4").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>E-Governance via online & offline server</h4><p>Problem Statement: E-Governance is the need of the hour and many citizen centric services are either online or going to be online. Any citizen to take benefit of these online eGovernance services need to have an access of any computer/mobile and a good internet connection. But citizens are not able to take full benefits of these citizen centrice-Governance services because of Internet connectivity issue. Even at some locations there is no internet connection at some times. As most of the citizen services portals are using text for communication and can a service be developed in the form of mobile app which can have an easy to use GUI and in the background it normally uses internet services and in case the services are not available then automatically it can use encrypted SMSes to request data from server and the server should be able to send the data to the user mobile app via encrypted SMSes which the app can decrypt and provide on the GUI of mobile app.</p></div>');



});







$(".my-btn-front-5").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>IP based multimedia & data communication</h4><p>Problem Statement In MSS/VSAT Networks a communication software is desired with adaptive codec based voice/video calling feature (adaptation depending on link quality) & that could support voice communication at 2-3 Kbps (including all overheads) while maintaining voice quality of 3-3.5 MOS. In addition to above, the software should also be able to interact with other applications such as browser/e-mail/FTP/messenger etc. at network layer and communicate with VSAT modem using fixed sized packets over Ethernet. Desired Outcome Software with two features a) voice (including low data rate 2-3 Kbps) & video calling b) Interfacing with standard network applications with data segmentation & reassembly Dataset No data will be provided Domain MSS & VSAT Communication Challenge Building application for multimedia & data communication which takes care of segmentation & reassembly of IP packets with minimal overhead and have end to end signaling built into it. Usage MSS & VSAT user applications User MSS & VSAT Networks, Strategic user groups Expected number of users Role of user To validate the software with field trials and adapt the same for various applications. </p></div>');



});







$(".my-btn-front-6").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>The present guidelines of DoT HQ do not allow more than nine mobile connections to an individual.</h4><p>Thus, it implies that even the connections have been obtained from different Telecom Service Providers (TSPs), the cumulative count should not exceed nine. Since there is no connectivity among the different TSPs’ subscriber databases therefore the TSPs are bound to limit the query within their own database to ensure that the new connection which is going to be activated does not cross the above count. There is no mechanism with TSP to check the no. of connections working for that individual with other TSPs. Expected Outcome An app and web application may be developed through which anyone can query the combined mobile subscriber databases of all the TSPs in a Licensed Service Area (LSA) so that-<ol><li>Any citizen can know the list of mobile connections working against her/ his Aadhaar number in an LSA. This information should be provided in an authentic manner only to actual Aadhaar allottee.</li><li>DoT can know the list of mobile connections working against a particular Aadhaar number in an LSA.</li></ol> The application should also be capable of generating the list of those mobile connections, count of which are more than a specific number for a particular Aadhaar number. Additional Information DoT requires each TSP to provide mobile subscriber data in a predefined format at regular intervals. Thus, solution to this problem should consider merging data from all the TSPs</p></div>');



});







$(".my-btn-front-7").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append("<div class='back-content'><h4>To build a program to report any adverse events</h4><p>There has been resurgence in use of Ayurvedic, Unani, Homoeopathy and Siddha medicines throughout globe. With increase in consumption, reports of side effects are also surfacing. With Pharmacovigilance programme in place, reporting of adverse events of these drugs need to be ensured. However, the process of reporting is manual and cumbersome. We require a mobile based app that makes the reporting of adverse events easy and that could be submitted ahead for further analysis of the obtained data.</p></div>");



});







$(".my-btn-front-8").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Smart Street Lighting System</h4><p>Enormous electric energy is consumed by the street lamps. Intelligent and adaptive lighting in street lights can be developed which can help in reducing power consumption. These systems can include real time monitoring of streetlights, Brightness control for LED lights Auto dimming schedule based on Geo location for LED lights etc.</p></div>');



});







$(".my-btn-front-9").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Digital solution to predict drought in a protected area/locality</h4><p> Drought or scarcity of water for the wild animals during summer is one of the major management issues in the forests of the Country. In spite of two seasons of monsoons in the Country, most of the streams and rivers in the forest areas will become dry by January – February posing severe threat to the animals as well as vegetation made vulnerable to forest fire. It would be appreciated if a digital tool is developed to predict the water scarcity in an area, sometimes as small as size of a range of 1000 ha, with the help of available physiographical data and local weather information. Local weather information such as rainfall, number of rainy days, average rainfall per day, average minimum and maximum temperature, humidity, wind speed, solar radiation, and physiographical data such as aspect, type of vegetation, percentage canopy, soil type, etc. can be included Associated Terminology that needs capture or tracking or smart linking: Drought, humidity, canopy cover, solar radiation, water scarcity, soil type, aspect Sub problems which needs to be resolved or form key part of the challenges Development of simple model to predict the drought or water scarcity in a locality based on sample data on various parameters mentioned above Managing parameters such as Water holding capacity of the soil Evapotranspiration under different situations (varying canopy cover, temperature, and duration of solar radiation, etc) Users who are facing the challenge/sub-problem could use data State Forests and Wildlife Departments Any record keeping data base/ legacy systems or integrations that need to be considered Local weather data available with the forest management Google image of the landcover/any other landcover map for the area Any other information available on natural resources of the area Required channel – mobile app, responsive web, web application, desired. A combination of responsive web and mobile applications Desired outcome if the challenge is addressed Efficient mobile based application for tackling the drought situation on account of animal welfare. Details pertaining to the scale of the problem Almost entire forest ranges of the country provided there is secondary data available at the desired scale. Shelf solutions or legacy solutions partially / fully addresses the challenges. Customized digital solutions for predicting drought at local scale is not available.</p></div>');



});







$(".my-btn-front-10").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>SMART System to Guide Patients</h4><p>1. In large sized hospitals (eg: AIIMS, PGI etc.) when a patient arrives alone or usually along with their care takers in the OPDs , Emergency departments, Pediatrics Centre etc. 2. The patients are generally in emergency condition and often feel lost. The first approach is therefore to the reception bay, from there the patients are directed to go to billing counter, available consultant Doctor is then decided. 3. The whole process, most of the time turns very stressful as it demands critical time of the patient. Sometimes duty guards are not available and available guards are not able to leave their duty areas to guide the patients to their destination in the hospitals. Desired Outcome: A GPRS guided Mobile Tablet fitted permanently on ‘SMART’ Wheel Chairs and in Stretcher bed is a very practical solution to resolve this issue. A pre-loaded software application i.e. the internal maps (similar to google maps) of the hospital need to be developed and installed on such tablets. The Hospital needs to be WiFi enabled and sensors can be attached to the rooms or along the corridors. Now from the start point where the Chairs and stretchers are issued, the starting point and destination point can be filled by trained duty guards. When the care taker of the patient moves with the SMART Wheel Chair or Stretcher, a real-time guided map and a voice (in local / regional or English language) tells the direction till the final destination is arrived. The ‘SMART’ Wheel Chairs and Stretcher beds can be collected by hospital staff later. This system has a potential to save lot of time and dependencies for the patient.</p></div>');



});







$(".my-btn-front-11").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Efficient, Easy and Integrated Billing System</h4><ul><li>One of the main reasons for inefficiency in DISCOMs today is regular meter reading, bill generation and bill collection. This is one of the major contributor to AT&C losses facing the DISCOMs</li><li>At present different Discoms (as of now there are 92 distribution companies in India) follow different process of bill collection. It involves there sub steps: Metering and meter reading Bill Generation Bill Collection</li><li>At present because of the inefficiency in the process there is huge revenue loss to the Discoms.</li><li>Today there is no mechanism that integrates all these and provides easy, hassle free and efficient way of bill collection.</li> Users of the System:<li>Utilities/Discoms who are distributing electricity are the billers</li><li>The consumers of the electricity – domestic, industrial and commercial are the bill payers in the system. As we can see that it all encompassing and covers the entire populace and citizenry of the country.</li><li>It is also pertinent to note that domestic consumers are from varied regions and sections of the society. That include people from rural and remote areas of the nation who have difficulty in access to internet. So the solution should be able to cover them also. Desired Outcome:</li><li>An efficient and integrated meter reading, bill generation and bill payment mechanism that can provide end to end solution.</li><li>At one hand it should reduce to hassle and increase the comfort for the bill payers and on the other hand it should increase the revenue collection for the Discoms and reduce the cost of collection.</li>Hence a win – win solution for all.</ul></div>');



});







$(".my-btn-front-12").click(function (e) {



    $(".my-front").css('transform' , 'rotateY(-180deg)');



    $(".my-back").css('transform' , 'rotateY(0)');



    $('.back-content').remove();



    $('.my-btn-back').css('display' , 'inline-block');



    $(".my-back").append('<div class="back-content"><h4>Passenger Security</h4><p>Security of passengers and their belongings is of paramount importance for Indian Railways. In case of any untoward incident or incident of crime against passengers and their belongings matter can be reported to Government Railway Police at Railway stations and on trains and also through given security helpline telephone number 182. A software solution needs to be provided for online registration of FIR over entire network of Indian Railway for speedy initiation of action by GRP.</p></div>');



});







$(".my-btn-back").click(function (e) {



    $(".my-back").css('transform' , 'rotateY(180deg)');



    $(".my-front").css('transform' , 'rotateY(0)');



    $('.my-btn-back').css('display' , 'none');



});







// When the user clicks on the button, open the modal 



document.getElementById("t-c").onclick = function() {



    document.getElementById('container-t-c').style.display = "block";



    };







// When the user clicks on <span> (x), close the modal



    document.getElementsByClassName("t-c-close")[0].onclick = function() {



    document.getElementById('container-t-c').style.display = "none";



};







// When the user clicks anywhere outside of the modal, close it



window.onclick = function(event) {



    if (event.target == document.getElementById('container-t-c')) {



        document.getElementById('container-t-c').style.display = "none";



   };



};


var modal1 = document.getElementById('container1');

// Get the button that opens the modal
var btn1 = document.getElementById("more");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};
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



