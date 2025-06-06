window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const pageContent = document.getElementById('page-content');
    if (!loader || !pageContent) return;

    gsap.timeline()
        .to('.loader-logo', { y: -20, opacity: 0, delay: 0.9, duration: 0.5, ease: "power2.in" })
        .to(
            '#loader',
            { opacity: 0, pointerEvents: 'none', duration: 0.8, ease: "power2.inOut" },
            "+=0"
        )
        .to(
            '#page-content',
            { opacity: 1, duration: 0.9, ease: "power2.out" },
            "-=0.7"
        )
        .set('#loader', { display: "none" })
        .add(() => {
            document.body.classList.remove('loading');
        });

    // お問い合わせボックス全体クリックでcontact.htmlへ遷移
    const contactBox = document.querySelector('.section-link-box[aria-label="お問い合わせページへ"]');
    if (contactBox) {
        contactBox.addEventListener('click', (e) => {
            if (e.target.closest('.contact-btn')) return;
            window.location.href = 'contact.html';
        });
        contactBox.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.contact-btn')) {
                window.location.href = 'contact.html';
            }
        });
    }
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', e => e.stopPropagation());
    });
});