$(document).ready(function() {
  $(document).imagesLoaded(function() {
    $(".pre-loader").fadeOut(1000);
  });

  $(".testimonial").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button class="icon-left-arrow slick-prev"></button>',
    nextArrow: '<button class="icon-right-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1
        }
      }
    ]
  });

  $(".clients-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    centerMode: true,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  });

  if ($(window).width() > 767) {
    let imgHeight = $("#gallery img").height();
    $("#gallery iframe").height(imgHeight);
    $("#gallery .gal-item").height(imgHeight);

    $(document).resize(function() {
      $("#gallery iframe").height(imgHeight);
      $("#gallery .gal-item").height(imgHeight);
    });
  }

  if ($(window).width() > 767) {
    let imgHeight = $("#media .media-wrap img").height();
    $("#media .media-wrap iframe").height(imgHeight);
  }

  let filename = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $(`.navbar-content a[href*="${filename}"]`)
    .parent("li")
    .addClass("active");
});
