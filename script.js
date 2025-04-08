document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const tabs = document.querySelectorAll('.tab-content');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remove active classes
        links.forEach(l => l.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
  
        // Add active to clicked tab
        const tabId = link.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        link.classList.add('active');
      });
    });
  });
  