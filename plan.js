gsap.utils.toArray('.plan-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        delay: i * 0.22,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});