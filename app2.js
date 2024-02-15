gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".square img",
        // start: "top 50%",
        // end: "top 30%",
        start: "center center",
        end: "bottom top",
        // rotation: 180,
        scrub: true,
        // toggleActions: "restart none none none",
        pin: ".div2",

        // pinSpacing: "true",
        // toggleActions: "restart pause resume complete",
        // play pause resume reverse restart seset complete none
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true
    }
})
tl.to(".square img", { x: "40vw", duration: 5000})
.to(".text h1", {opacity: 0, duration: 2000})
    .to(".square img", { rotation: 0, duration: 3000});

// gsap.to(".square img", {
//     // x: "50vw",
//     // duration: 1,
//     // scale: 0.5,
//     // onComplete: anim_completed,
//     // onReverseComplete: anim_completed,

//     scrollTrigger: {
//         trigger: ".square img",
//         start: "center center",
//         end: "bottom top",
//         // rotation: 180,
//         scrub: true,
//         // toggleActions: "restart none none none",
//         pin: ".square img",
        
//         // pinSpacing: "true",
//         // toggleActions: "restart pause resume complete",
//         // play pause resume reverse restart seset complete none
//         // onEnter onLeave onEnterBack onLeaveBack
//         markers: true
//     }
// }) 



// function anim_completed() {
//     gsap.to(".square", {
//         rotation: 90,
//         duration: 0.5,
//         scrollTrigger: {
          
//             // scrub: true
//             // toggleActions: "restart none none reverse"
//             // markers: true
//         }
//     });
// }
// gsap.to("#gear", { duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45 });


// ARSHAD

const fl = gsap.timeline({
    scrollTrigger: {
        // trigger: ".square2",
        start: "center center",
        end: "bottom top",
        scrub: true,
        //toggleActions: "restart none none none",
        pin: ".div3",
        pinSpacing: "true",
        // toggleActions: "restart pause resume complete",
        // play pause resume reverse restart seset complete none
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true
    }
})

fl.to(".img01 img", { 
    x: 750, 
    scale: 1, 
    duration: 20, 
})
fl.to(".img02 img", {
    x: 450,
    y: 300,
    scale: 1,
    duration: 20,
})
fl.to(".img03 img", {
    x: 450,
    y: -300,
    scale: 1,
    duration: 20,
})
fl.to(".img04 img", {
    x: -750,
    scale: 1,
    duration: 20,
})
fl.to(".img05 img", {
    x: -450,
    y: 300,
    scale: 1,
    duration: 20,
})

fl.to(".img06 img", {
    x: -450,
    y: -300,
    scale: 1,
    duration: 20,
})




