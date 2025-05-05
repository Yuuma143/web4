
const bannerImages = [
    "backgroundHome.jpg",
    "backgroundMonitoring_DECO_27.webp",
    "thenightsbackground.jpg"
];


const bannerContainer = document.getElementById("banner-container");
const nuttrai = document.getElementById("nuttrai");
const nutphai = document.getElementById("nutphai");

let currentBanner = 0;
let interval;

function updateBanner() {
    bannerContainer.innerHTML = `
        <img src="${bannerImages[currentBanner]}" 
             style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                background-color: black;
             ">
    `;
}

function AnhPhiaTruoc() {
    currentBanner = (currentBanner + 1) % bannerImages.length;
    updateBanner();
}

function AnhPhiaSau() {
    currentBanner = (currentBanner - 1 + bannerImages.length) % bannerImages.length;
    updateBanner();
}

function startAutoSlide() {
    interval = setInterval(AnhPhiaTruoc, 5000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

nutphai.addEventListener('click', () => {
    AnhPhiaTruoc();
    resetAutoSlide();
});

nuttrai.addEventListener('click', () => {
    AnhPhiaSau();
    resetAutoSlide();
});

updateBanner();
startAutoSlide();
