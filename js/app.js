gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
     duration: 0.6,
     opacity: 0,
     x: -250,
     stagger: 0.3
})

gsap.from(".animate-hero-2", {
    duration: 0.6,
    opacity: 0,
    x: 250,
    stagger: 0.3
})

gsap.from(".animate-hero-3", {
    scrollTrigger: '#projects',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
})

gsap.from(".animate-hero-4", {
    scrollTrigger: '#tool',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
})


gsap.from(".animate-hero-5", {
    scrollTrigger: '.animate-hero-5',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
})

gsap.from("#about", {
    scrollTrigger: '#about',
    duration: 0.8,
    opacity: 0,
    x: -250,
    stagger: 0.2
})

gsap.from("#about-text", {
    scrollTrigger: '#about-text',
    duration: 0.8,
    opacity: 0,
    x: 250,
    stagger: 0.2
})


gsap.from(".dhoinsha", {
    duration: 0.8,
    opacity: 0,
    y: -250,
    stagger: 0.2
})

gsap.from(".dhoinsha1", {
    duration: 0.8,
    opacity: 0,
    x: -250,
    stagger: 0.2
})

gsap.from(".dhoinsha2", {
    duration: 0.8,
    opacity: 0,
    x: 250,
    stagger: 0.2
})





