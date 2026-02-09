const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchableCards = document.querySelectorAll('.searchable-card');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const moreInfoText = document.getElementById('moreInfoText');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const applyTheme = (theme) => {
    document.body.classList.toggle('light', theme === 'light');
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
};

const savedTheme = localStorage.getItem('tft-theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('tft-theme', nextTheme);
    applyTheme(nextTheme);
});

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim().toLowerCase();
        searchableCards.forEach((card) => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
    });
}

if (moreInfoBtn && moreInfoText) {
    moreInfoBtn.addEventListener('click', () => {
        moreInfoText.classList.toggle('hidden');
        moreInfoBtn.textContent = moreInfoText.classList.contains('hidden') ? 'Más información' : 'Ocultar';
    });
}

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!email || !message) {
            event.preventDefault();
            formStatus.textContent = 'Completa todos los campos antes de enviar.';
            return;
        }

        formStatus.textContent = 'Enviando mensaje...';
    });
}
