document.addEventListener('DOMContentLoaded', () => {
    //Wrapper animation
    anime.timeline({
            targets: ".welcome",
            easing: "easeOutExpo",
        })
        .add({
            width: ["0vw", "100vw"],
            opacity: 1,
            duration: 1500,
        })
        .add({
            delay: 2700,
            translateX: "100vw",
            duration: 1500,
            complete: function (anime) {
                document.querySelector('.welcome').remove();
            }
        })

    //Text animation
    anime({
        targets: ".heading",
        delay: 500,
        opacity: 1,
        duration: 1800,
        translateY: ["-50px", "0px"],
        easing: "easeOutExpo",
    });

    //Text-sm animation
    anime({
        targets: ".sub-heading",
        delay: 600,
        opacity: 1,
        duration: 1800,
        translateY: ["-30px", "0px"],
        easing: "easeOutExpo",
    });

    //Loader animation
    anime({
        targets: ".loader",
        delay: 2000,
        duration: 2300,
        width: ["0", "100%"],
        easing: "easeOutExpo",
    });

    //Loader-wrapper animation
    anime({
        targets: ".loader-wrapper",
        delay: 1500,
        duration: 1800,
        opacity: 1,
        easing: "easeOutExpo",
    });
})

//Paragraphs
anime({
    targets: '.home',
    opacity: 1,
    duration: 1800,
    //   translateY: ["30px", "0px"],
    offset: '-=700',

    easing: "easeOutExpo",
    delay: (el, i) => 5200 + 100 * i,
})



document.addEventListener('DOMContentLoaded', () => {
    //  wrapper animation
    anime.timeline({
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.banner',
            duration: 2000,
            delay: 3000,
            opacity:[0,1],
            translateY: [-100, 0],
            width: ['0px', '100%'],
        })
        .add({
            targets: '.header',
            opacity:[0,1],
            width: ['0px', '100%'],
            offset: '-=200',
        })
        .add({
            targets: '.nav-list li a',
            // opacity:[0,1],
            translateY:[20,0],
            delay: (el, i) => 100 * i,
            offset: '-=200',
        })
        .add({
            targets: '.home-welcome',
            opacity:[0,1],
            offset: '-=200',
        })
        anime({
            targets: '.single-book',
            delay:2000,
            opacity: [0, 0.9],
            translateY: [-100, 55+'%'],
            easing: "easeOutExpo",
            duration:2000,
            offset: '-=1200',
        });
        anime({
            targets: '.single-title, .single-explore',
            delay:2000,
            translateX: [-200, 10+'%'],
            easing: "easeOutExpo",
            duration:2000,
            offset: '-=1200',
        });    
        anime({
            targets: '.single-path',
            delay:2000,
            opacity: [0,1],
            // translateX: [-200, 0+'%'],
            easing: "easeOutExpo",
            duration:3000,
            offset: '-=1200',
        })
        anime({
            targets: '.single, .contact, .individual',
            delay:200,
           opacity: [0,1],
            easing: "easeOutExpo",
            duration:2000,
            offset: '-=500',
        })

})


let aboutImages = document.querySelectorAll('.home-about--first');

aboutImages.forEach((aboutImage) => {
    aboutImage.addEventListener('mouseenter',()=>{
        anime.remove(aboutImage);
        anime({
            targets: aboutImages,
            scale: 1.1,
            translateX:-5,
            translateY:-5,
            easing: 'easeOutExpo',
        })
    })

    aboutImage.addEventListener('mouseleave',()=>{
        anime.remove(aboutImage);
        anime({
            targets: aboutImages,
            scale: 1,
            translateX:0,
            translateY:0,
            easing: 'easeOutExpo',
        })
    })
})

let buttonHover = document.querySelectorAll('.main-btn, .nav-list a');

buttonHover.forEach((buttonHover) => {
    buttonHover.addEventListener('mouseenter',()=>{
        let letter = buttonHover.querySelectorAll('.letter');
        anime.remove(letter);
        anime.timeline({
            targets: letter,
        })
        .add({
            translateX: [0,-30],
            opacity: [1,0],
            easing: 'easeInExpo',
            duration: 500,
            delay: (el, i) => 30 * i,
        })
        .add({
            translateX: [40, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1100,
            delay: (el, i) => 30 * i,
        })
    })
})


