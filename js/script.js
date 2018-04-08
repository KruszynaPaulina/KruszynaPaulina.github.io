// Main navigation

$(function() {

  var aboutLinkHome = $('#about__link--home');
  var projectLinkHome = $('#projects__link--home');
  var contactLinkHome = $('#contact__link--home');

  var sectionAbout = $('#section__about');
  var sectionProject = $('#section__projects');
  var sectionContact = $('#section__contact');

  var aboutNavbar = $('#about__navbar');
  var aboutIconScroll = $('#about__iconScroll');
  
// Home

    sectionContact.hide();
    sectionProject.hide();
    sectionAbout.hide();

    $('#home__link--contact').on('click', function(event) {
      event.preventDefault();
      sectionContact.removeClass('returnRight').addClass('moveFromRight');
      contactLinkHome.show();
      sectionContact.show();
      sectionContact.scrollTop(0);
    });

    $('#home__link--projects').on('click', function(event) {
      event.preventDefault();
      projectLinkHome.show();
      sectionProject.show();
      sectionProject.scrollTop(0);
      sectionProject.removeClass('returnLeft').addClass('moveFromLeft');
    });

    $('#home__link--about').on('click', function(event) {
      event.preventDefault();
      sectionAbout.removeClass('returnBottom').addClass('moveFromBottom');
      sectionAbout.show();
      sectionAbout.scrollTop(0);

      setTimeout(function() {
        aboutLinkHome.show();
        aboutNavbar.show();
        aboutIconScroll.show();
      }, 700);
      
    })

// Contact

    contactLinkHome.on('click', function() {
      event.preventDefault();
      sectionContact.removeClass('moveFromRight').addClass('returnRight');
      contactLinkHome.hide();

      setTimeout(function() {
        sectionContact.hide();
      }, 600);

    });
    contactLinkHome.hide();


// Projects

    projectLinkHome.on('click', function(event) {
      event.preventDefault();
      sectionProject.removeClass('moveFromLeft').addClass('returnLeft');
      projectLinkHome.hide();

      setTimeout(function() {
        sectionProject.hide();
      }, 600);
    });

    projectLinkHome.hide();

// About

    aboutLinkHome.on('click', function(event) {
      event.preventDefault();
      sectionAbout.removeClass('moveFromBottom').addClass('returnBottom');
      aboutLinkHome.hide();
      aboutNavbar.hide();
      aboutIconScroll.hide();

      setTimeout(function() {
        sectionAbout.hide();
      }, 600);
      
    })
      
    aboutLinkHome.hide();
    aboutNavbar.hide();
    aboutIconScroll.hide();
     
});

// Carousel - skills

$(function(){

    var carousel = $("#carousel"),
    carouselList = $("ul.carousel__skillsList"),
    carouselDots = $("ul.carousel__dots");

    carouselList.find("li").each(function(){
        carouselDots.append("<li></li>");
    });

    var dot = carouselDots.find("li");
    dot.first().addClass("active");

    dot.click(function(){
        target = $(this).index();
        changeSlide(target);
    });

    function changeSlide(target) {
        carouselList.stop().animate({"left": -100 * target + "%"});
        dot.removeClass("active").eq(target).addClass("active");
    }

    var left = $(".carousel__arrow--left"),
    right = $(".carousel__arrow--right");

    left.click(function(){
        target = dot.siblings('.active').index();
        target == 0 ? target = dot.length - 1 : target -= 1;
        changeSlide(target);
    });

    right.click(function(){
        target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        changeSlide(target);
    });
    
});

$(function(){

    // navbar ;

  var sectionAbout = $("#section__about");
  var htmAndBody = $('html,body');

  $("#linkToAbout").click(function(event){
    event.preventDefault();
    sectionAbout.animate({ scrollTop: sectionAbout.scrollTop() + $("#about__introduction").offset().top - sectionAbout.offset().top }, { duration: 'slow', easing: 'swing'});
    htmAndBody.animate({ scrollTop: sectionAbout.offset().top }, { duration: 1000, easing: 'swing'});
  });

  $("#linkToAboutSkills").click(function(event){
    event.preventDefault();
    sectionAbout.animate({ scrollTop: sectionAbout.scrollTop() + $("#about__skills").offset().top - sectionAbout.offset().top }, { duration: 'slow', easing: 'swing'});
    htmAndBody.animate({ scrollTop: $("#section__about").offset().top }, { duration: 1000, easing: 'swing'});
  });

  $("#linkToAboutEducation").click(function(event){
    event.preventDefault();
    sectionAbout.animate({ scrollTop: sectionAbout.scrollTop() + $("#about__education").offset().top - sectionAbout.offset().top }, { duration: 'slow', easing: 'swing'});
    htmAndBody.animate({ scrollTop: sectionAbout.offset().top }, { duration: 1000, easing: 'swing'});
  });

  $("#linkToAboutWork").click(function(event){
    event.preventDefault();
    sectionAbout.animate({ scrollTop: sectionAbout.scrollTop() + $("#about__work").offset().top - sectionAbout.offset().top }, { duration: 'slow', easing: 'swing'});
    htmAndBody.animate({ scrollTop: sectionAbout.offset().top }, { duration: 1000, easing: 'swing'});
  });

  $("#linkToAboutFooter").click(function(event){
    event.preventDefault();
    sectionAbout.animate({ scrollTop: sectionAbout.scrollTop() + $("#about__footer").offset().top - sectionAbout.offset().top }, { duration: 'slow', easing: 'swing'});
    htmAndBody.animate({ scrollTop: sectionAbout.offset().top }, { duration: 1000, easing: 'swing'});
  });

  sectionAbout.scroll(function() {
          var screenTop = sectionAbout.scrollTop(),
          positionIntroduction = sectionAbout.scrollTop() + $("#about__introduction").offset().top - sectionAbout.offset().top,
          positionSkills = sectionAbout.scrollTop() + $("#about__skills").offset().top - sectionAbout.offset().top,
          positionEducation = sectionAbout.scrollTop() + $("#about__education").offset().top - sectionAbout.offset().top,
          positionWork = sectionAbout.scrollTop() + $("#about__work").offset().top - sectionAbout.offset().top,
          positionFooter = sectionAbout.scrollTop() + $("#about__footer").offset().top - sectionAbout.offset().top - 800,
          progressBar = $('.progress-bar--incIntroduction');

          if (screenTop >= positionIntroduction) {
            $('#about__circle--about').addClass('active');
          } else {
            $('#about__circle--about').removeClass('active');
          }

          if (screenTop >= positionIntroduction && screenTop < positionSkills) {
            var scrollPercent = screenTop/positionSkills;
            var scrollPercentRounded = Math.round(scrollPercent*100/4);
            progressBar.css('height', scrollPercentRounded + '%');
          }
  
          if (screenTop >= positionSkills) {
            $('#about__circle--skills').addClass('active');
          } else {
            $('#about__circle--skills').removeClass('active');
          }

          if (screenTop >= positionSkills && screenTop < positionEducation) {
            var scrollPercent = (screenTop-positionSkills)/(positionEducation-positionSkills);
            var scrollPercentRounded = Math.round(scrollPercent*100/4);
            progressBar.css('height', scrollPercentRounded + 25 + '%');
          }

          if (screenTop >= positionEducation) {
            $('#about__circle--education').addClass('active');
          } else {
            $('#about__circle--education').removeClass('active');
          }

          if (screenTop >= positionEducation && screenTop < positionWork) {
            var scrollPercent = (screenTop-positionEducation)/(positionWork-positionEducation);
            var scrollPercentRounded = Math.round(scrollPercent*100/4);
            progressBar.css('height', scrollPercentRounded + 50 + '%');
          }

          if (screenTop >= positionWork) {
            $('#about__circle--work').addClass('active');
          } else {
            $('#about__circle--work').removeClass('active');
          }

          if (screenTop >= positionWork && screenTop < positionFooter + 200) {
            var scrollPercent = (screenTop-positionWork)/(positionFooter-positionWork);
            var scrollPercentRounded = Math.round(scrollPercent*100/4);
            progressBar.css('height', scrollPercentRounded + 75 + '%');
          }

          if (screenTop >= positionFooter) {
            $('#about__circle--aboutFooter').addClass('active');
          } else {
            $('#about__circle--aboutFooter').removeClass('active');
          }

        });

});
