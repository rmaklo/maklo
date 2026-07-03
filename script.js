//Animation des boutons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.remove('sweep-in', 'sweep-out');
    btn.classList.add('sweep-reset');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        btn.classList.remove('sweep-reset');
        btn.classList.add('sweep-in');
      });
    });
  });
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('sweep-in', 'sweep-reset');
    btn.classList.add('sweep-out');
  });
});