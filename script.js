// --- DATA: Conteúdo Dinâmico ---
const CARS_DATA = [
    { title: "O Pão de Queijo Voador", desc: "Direto de MG para a rampa.", img: "https://picsum.photos/400/300?random=1" },
    { title: "Bananeira Atômica", desc: "Potássio puro na descida.", img: "https://picsum.photos/400/300?random=2" },
    { title: "Chinelo de Pai", desc: "Ninguém escapa dessa velocidade.", img: "https://picsum.photos/400/300?random=3" }
];

const RULES_DATA = [
    { title: "Design", content: "Seu veículo deve ser movido apenas pela gravidade e imaginação." },
    { title: "Segurança", content: "Capacetes são obrigatórios. Freios funcionais são... recomendados." },
    { title: "Showmanship", content: "Não basta ser rápido, tem que dar espetáculo no palco!" }
];

// --- RENDERIZADORES ---
function initApp() {
    renderCards();
    renderAccordion();
    setupCarousel();
    initScrollReveal();
}

function renderCards() {
    const container = document.getElementById('cars-container');
    container.innerHTML = CARS_DATA.map(car => `
        <article class="card">
            <img src="${car.img}" alt="${car.title}" style="width:100%">
            <div style="padding: 1rem">
                <h3>${car.title}</h3>
                <p>${car.desc}</p>
            </div>
        </article>
    `).join('');
}

function renderAccordion() {
    const container = document.getElementById('rules-accordion');
    container.innerHTML = RULES_DATA.map((rule, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})">
                ${rule.title}
            </button>
            <div class="accordion-content" id="content-${index}">
                <p>${rule.content}</p>
            </div>
        </div>
    `).join('');
}

// --- FUNCIONALIDADES ---

// Acessibilidade: Fonte
let currentFontSize = 16;
function changeFontSize(action) {
    currentFontSize = action === 'increase' ? currentFontSize + 2 : currentFontSize - 2;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
}

// Acessibilidade: Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Acordeão
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// Scroll Reveal Simplificado com Intersection Observer
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
}

// Carrossel Simples
function setupCarousel() {
    const carousel = document.getElementById('main-carousel');
    let index = 0;
    
    // Injeta itens no carrossel
    carousel.innerHTML = [1,2,3].map(i => `
        <div class="carousel-item">
            <div style="background:var(--primary); height:300px; display:flex; align-items:center; justify-content:center; color:white; border-radius:var(--radius)">
                <h2>Destaque #${i}</h2>
            </div>
        </div>
    `).join('');

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % 3;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + 3) % 3;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
}

window.onload = initApp;
