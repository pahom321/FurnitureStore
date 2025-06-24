// Плавное появление элементов при прокрутке
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .collection-card');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};
// Стили для анимации
document.querySelectorAll('.feature-card, .collection-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 1.5s, transform 1.5s';
});
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();