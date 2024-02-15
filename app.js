gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: "50vw",
    duration: 1,
    // scale: 0.5,
    onComplete: anim_completed,
    // onReverseComplete: anim_completed,

    scrollTrigger: {
        // trigger: ".square2",
        start: "top 50%",
        end: "top 30%",
        // rotation: 180,
        scrub: true,
        // toggleActions: "restart none none none",
        pin: ".square",
        
        // pinSpacing: "true",
        // toggleActions: "restart pause resume complete",
        // play pause resume reverse restart seset complete none
        // onEnter onLeave onEnterBack onLeaveBack
        markers: true
    }
}) 

function anim_completed() {
    gsap.to(".square", {
        rotation: 90,
        duration: 0.5,
        scrollTrigger: {
          
            // scrub: true
            // toggleActions: "restart none none reverse"
            // markers: true
        }
    });
}
gsap.to("#gear", { duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45 });