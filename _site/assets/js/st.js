
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.batch('.fadeIn', {
    onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power2.out})
})

ScrollTrigger.batch('.fadeInTriangle', {
    onEnter: batch => gsap.to(batch, {duration: 2, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power2.out})
})