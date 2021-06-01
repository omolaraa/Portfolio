/////////////Sticky Nav-bar///////////////////////////
window.addEventListener("scroll", function () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('active-nav', window.scrollY > 0);
})
///////////////////////////////////////////////////////////////
//////////Active Nav on scroll///////////////

$(window).scroll(function () {
  if ($(window).width() > 700) {
    let navLinks = document.querySelectorAll('.nav-link');
    let fromTop = window.scrollY;


    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    });
  };
});


// $(window).scroll(function () {
//   if ($(window).width() < 700) {
//     let navLinks = document.querySelectorAll('.nav-link');
//     let fromTop = window.scrollY;

//     navLinks.forEach(link => {
//       let section = document.querySelector(link.hash);

//       if (
//         section.offsetTop <= fromTop &&
//         section.offsetTop + section.offsetHeight > fromTop
//       ) {
//         link.classList.add('active')
//       } else {
//         link.classList.remove('active')
//       }
//     });
//   };
// });


//////////////////////////////////

///////////Nav Section -- link color/////////////

$('.nav-list').on('click', '.nav-link', function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
});
$('.nav-list').on('click', '.nav-link', function () {
  $('.nav-list').toggleClass('toggle-nav')
  $('.nav-list-bg').toggleClass('bg-appear')
});

var media = window.matchMedia("(max-width:700px)")
function myFunction(media) {
  if (media.matches) {
    $('.nav-list').on('click', '.nav-link', function () {
      $('.act').removeClass('act');
      $(this).addClass('act');
    });
  } else {
    $('.nav-list').on('click', '.nav-link', function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    });
  }
}
myFunction(media)

////////////////////////////////////

////////////////Skill Section -- Progress Bar//////////////////////
$('.skill-percentage').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css('width', per + '%');
  $({animatedValue: 0}).animate({animatedValue: per}, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  })
});
////////////////////////////////////////////////////////////////////////
///////////////////////////Poertfolio Section -- Filtering Projects//////////////

var $projects = $('.portfolio-projects');
$projects.isotope({
  itemSelector: '.project',
  layoutMode: 'fitRows',
  animationEngine: 'best-available'
});
$('.list').click(function () {
  $('.list').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-projects').isotope({
    filter: selector
  });
  return false;
});

// $('.list').on('click', function () {
//   $('.list').removeClass('active');
//   $(this).addClass('active');

//   const value = $(this).attr('data-filter');
//   if (value == '*') {
//     $projects.isotope({
//       filter: '*'
//     });
//   }
//   else if (value == '.front') {
//     $projects.isotope({
//       filter: '.front'
//     });
//   } else {
//     $projects.isotope({
//       filter: '.back'
//     });
//   }
// })
////////////////////////////Contact Section -- Background Color for input/////////////////
$(document).ready(function () {
  $(".contact-form").blur(function () {
    $(this).css("color", "#ffffff")
  });
});
//////////////////////////////////
/////////////////Clear input after reload////////////
let btnClear = document.querySelector('#btn');
let inputs = document.querySelectorAll('.contact-form');

btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});


$(document).ready(function () {
  $('.nav-toggle').click(function () {
    $('.nav-list').toggleClass('toggle-nav')
    $('.nav-list-bg').toggleClass('bg-appear')

    // $('.nav-link').removeClass('active');
    // $('.nav-link').removeClass('act');

  })
});
