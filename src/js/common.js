$(function() {
  $('.carousel-services').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouselService();
    }, 100);
  })

  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    rasponsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });

  function carouselService() {
    $('.carousel-services-item').each(function() {
        var ths = $(this),
            thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);
    });
  }carouselService()

  $('.carousel-services-composition .h3').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
  });

  $('section .h2').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
  });

  $('.carousel-services-content').equalHeights();

  // Resize Window
  function onResize() {
    $('.carousel-services-content').equalHeights();
  }onResize();
  window.onresize = function() {onResize()}

  //E-mail Ajax Send
  $(document).ready(function() {
    $("form.callback").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "/mail.php", //Change
        data: th.serialize()
      }).done(function() {
        $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
        setTimeout(function() {
          // Done Functions
          $(th).find('.success').removeClass('.active').fadeOut();
          th.trigger("reset");
        }, 3000);
      });
      return false;
    });
  })

  $('select').selectize({
    create: true
  })
});
