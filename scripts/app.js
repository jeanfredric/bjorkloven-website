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

});