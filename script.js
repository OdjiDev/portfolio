// Changement dynamique de thème (Dark Mode / Light Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// Traitement interactif du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci Ouzairou pour votre message ! Ce formulaire est prêt à être connecté à un service d’envoi d’e-mails (ex: EmailJS).');
    e.target.reset();
});