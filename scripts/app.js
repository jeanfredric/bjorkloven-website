$(document).ready(function(){

  let price = 0;
  let nrOfTickets = 0;
  let ticketType;
  let calculatedPrice = 0;

  /* Functions *********************************/

  function disableScroll() {
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  }

  function enableScroll() {
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  }

  function setBoxText() {
      if (ticketType === "sitting") {
        $(".box p#box-r1").text(" " + nrOfTickets + " st sittplatsbiljetter");
        $(".box p#box-r2").text(" Sektion C, Rad 8, Plats 1-" + nrOfTickets);
        price = 249;

      } else {
        $(".box p#box-r1").text(" " + nrOfTickets + " st ståplatsbiljetter");
        $(".box p#box-r2").text(" Sektion H, Ståplats hemmalag");
        price = 149;
      }
  }

  function calculatePrice() {
    calculatedPrice = nrOfTickets * price;
    $("#calculated-price").text(calculatedPrice);
  }

  /* Listeners **********************************/

  $('.tickets-btn').click(function() {
    $('.modal-backdrop').fadeIn(100);
    $('.tickets-modal').fadeIn(100);
    // disableScroll();
  });

  $('.modal-backdrop').click(function() {
    $('.modal-backdrop').fadeOut(100);
    $('.tickets-modal').fadeOut(100);
    enableScroll();
  });

  $('.modal-backbtn').click(function() {
    $('.modal-backdrop').fadeOut(100);
    $('.tickets-modal').fadeOut(100);
    enableScroll();
  });

  $('input[type="radio"]').click(function() {
      ticketType = $(this).attr("value");
      setBoxText();
      calculatePrice();
      $(".box").fadeIn(100);
  });

  $("select#nr-of-tickets").change(function() {
    nrOfTickets = $(this).children("option:selected").val();
    calculatePrice();
    setBoxText();
  });


  /* Hamburger menu */
  let bg = $(".hamburger-bg");
  let menuOptions = $("#menu");
  let menuNav = $("#menu-nav");

  $("#hamburger").click(function() {
    
    bg.show();
    bg.animate({
        height: "100vh",
        width: "100vw"
      },350, '',(function(){
        
        menuOptions.fadeIn(1000);
        menuNav.fadeIn(500);

        disableScroll();
      }));
    });

    menuOptions.click(function() {
      menuOptions.hide();
      menuNav.hide();
      bg.hide();
      enableScroll();
    });

});

/* Hero news carousel */

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorsParent = document.querySelector('.controls ul');
const indicators = document.querySelectorAll('.controls li');

let sectionIndex = 0;
const nrOfSections = 2;

function setIndex() {
  document.querySelector('.controls .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (i) * -50 + '%)';
    sectionIndex = i;
  })
});

rightArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex < (nrOfSections - 1) ? sectionIndex + 1 : 0);
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorsParent.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';

});

leftArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex > 0 ? sectionIndex - 1: (nrOfSections - 1));
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorsParent.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
  
});
