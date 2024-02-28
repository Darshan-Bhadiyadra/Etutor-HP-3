$('#logoslider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:1800,
    smartSpeed:1000,
    autoplayHoverPause:true,
    fluidSpeed:4200,
    responsive:{
        0:{
            items:1
        },
        425:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1440:{
            items:5
        }
    }
})

$('#testimonial').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1440: {
            items:2
        }
    }
})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  AOS.init();
