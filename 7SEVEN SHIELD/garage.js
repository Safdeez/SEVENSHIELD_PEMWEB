const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const captions = document.querySelectorAll('.caption');
let currentSlide = 0;
let autoPlayInterval = 3000; // interval waktu untuk auto play (dalam milisecond)

// Fungsi untuk menampilkan slide aktif
function showSlide() {
slides.forEach((slide, index) => {
    slide.classList.remove('active');
    captions[index].classList.remove('active');
});
slides[currentSlide].classList.add('active');
captions[currentSlide].classList.add('active');
}

// Fungsi untuk mengganti slide
function changeSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide();
}

// Fungsi untuk auto play
function autoPlay() {
changeSlide();
}

// Menampilkan slide pertama
showSlide();

// Mengaktifkan auto play
setInterval(autoPlay, autoPlayInterval);