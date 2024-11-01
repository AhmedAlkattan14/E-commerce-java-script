$(".owl-carousel").ready(function () {
  $("#owl-demo").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    autoplayHoverPause: true,
    items: 1, // Default items for mobile screens
    // loop: true,
    nav: false, // You can enable navigation buttons if needed
    responsive: {
      0: {
        items: 1 // 1 item for mobile
      },
      576: {
        items: 2 // 2 items for small screens
      },
      768: {
        items: 3 // 3 items for tablet
      },
      1024: {
        items: 4 // 4 items for small desktops
      },
      1200: {
        items: 5 // 5 items for large desktops
      }
    }
  });

  // Custom Navigation Events
  var owl = $("#owl-demo");
  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

// testmonial\\\\\\\\\\\
$(document).ready(function () {
  let currentTestimonial = 0;
  const $testimonials = $(".testimonial");

  function showTestimonial(index) {
    $testimonials.removeClass("active").eq(index).addClass("active");
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % $testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial =
      (currentTestimonial - 1 + $testimonials.length) % $testimonials.length;
    showTestimonial(currentTestimonial);
  }

  showTestimonial(currentTestimonial);

  $(".arrow-button").on("click", function () {
    if ($(this).text() === "→") {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
  });
});
