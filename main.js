

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const pageContent = document.getElementById('page-content');
    if (!loader || !pageContent) return;

    // ロゴ→ローダー＋ページ本体がクロスフェード
    gsap.timeline()
        .to('.loader-logo', { y: -20, opacity: 0, delay: 0.9, duration: 0.5, ease: "power2.in" })
        .to(
            '#loader',
            { opacity: 0, pointerEvents: 'none', duration: 0.8, ease: "power2.inOut" },
            "+=0" // ロゴ消えたらすぐ
        )
        .to(
            '#page-content',
            { opacity: 1, duration: 0.9, ease: "power2.out" },
            "-=0.7" // ローダーが消えはじめた直後から本体をじわじわ表示
        )
        .set('#loader', { display: "none" });
});


const contactBox = document.querySelector('.section-link-box[aria-label="お問い合わせページへ"]');
if (contactBox) {
    contactBox.addEventListener('click', (e) => {
        if (e.target.closest('.contact-btn')) return; // ボタンは通常動作
        window.location.href = 'contact.html';
    });
    contactBox.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.contact-btn')) {
            window.location.href = 'contact.html';
        }
    });
}
// contact-btnクリック時はイベント伝播を止める
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', e => e.stopPropagation());
});
