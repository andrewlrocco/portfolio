document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.tab-content');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Remove active states
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Add active state to clicked tab
      link.classList.add('active');
      const tab = link.getAttribute('data-tab');
      document.getElementById(tab).classList.add('active');
    });
  });
});
