// スクロールで画面内に入った要素をふわっと表示する
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in');

  // IntersectionObserver 非対応の環境では最初から表示する
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // 一度表示したら監視を止める
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
});
