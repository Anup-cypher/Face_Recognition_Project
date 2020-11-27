$('.singlecarousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    nav:true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.room').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    nav:true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

$('.slide').owlCarousel({
    // margin: 10,
    loop:true,
    nav: true,
    // autoplay:true,
    dots:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$('.testimonials').owlCarousel({
    margin: 10,
    dots:true,
    autoplay:true,
    // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     navText: ["<i class='fas fa-chevron-down'></i>", "<i class='fas fa-caret-left'></i>"],
//     responsive: {
//         0: {
//             items: 1
//         }
//     }
// });
//
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:100,
//     autoplay:true,
//     autoplayTimeout:5000,
    // nav:true,
    //     navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
    // autoplayHoverPause:true
// });