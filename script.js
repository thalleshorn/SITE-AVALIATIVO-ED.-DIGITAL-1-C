/* ================================
   DADOS DINÂMICOS
================================ */
const coffees = [
    { name: "Espresso", desc: "Café forte e concentrado." },
    { name: "Latte", desc: "Café com leite e espuma." },
    { name: "Cappuccino", desc: "Equilíbrio entre café, leite e espuma." }
];

const images = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
];

const faqs = [
    { q: "Qual café é mais forte?", a: "O espresso é o mais concentrado." },
    { q: "Cappuccino tem chocolate?", a: "Pode ter, dependendo da receita." }
];

/* ================================
   RENDERIZAÇÃO DINÂMICA
================================ */
const coffeeContainer = document.getElementById("coffeeContainer");

coffees.forEach(c => {
    const card = document.createElement("article");
    card.classList.add("card", "reveal");

    card.innerHTML = `
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
    `;

    coffeeContainer.appendChild(card);
});

/* ================================
   CARROSSEL
================================ */
const track = document.getElementById("carouselTrack");

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagem de café";
    track.appendChild(img);
});

let index = 0;

document.querySelector(".next").onclick = () => {
    index++;
    track.style.transform = `translateX(-${index * 220}px)`;
};

document.querySelector(".prev").onclick = () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(-${index * 220}px)`;
};

/* ================================
   ACCORDION
================================ */
const accordionContainer = document.getElementById("accordionContainer");

faqs.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("accordion-item");

    div.innerHTML = `
        <div class="accordion-header">${item.q}</div>
        <div class="accordion-content">${item.a}</div>
    `;

    div.querySelector(".accordion-header").onclick = () => {
        const content = div.querySelector(".accordion-content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    };

    accordionContainer.appendChild(div);
});

/* ================================
   ACESSIBILIDADE
================================ */
let fontSize = 16;

document.getElementById("increaseFont").onclick = () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFont").onclick = () => {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
};

document.getElementById("toggleContrast").onclick = () => {
    document.body.classList.toggle("high-contrast");
};

/* ================================
   SCROLL REVEAL
================================ */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("active");
        }
    });
});
