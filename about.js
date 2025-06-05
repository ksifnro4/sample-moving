gsap.utils.toArray('.about-feature-list li').forEach((li, i) => {
    gsap.from(li, {
        opacity: 0,
        x: i % 2 === 0 ? -300 : 300, // 偶数は左、奇数は右から
        duration: 0.8,
        delay: i * 0.12,
        ease: "power2.out",
        scrollTrigger: {
            trigger: li,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});