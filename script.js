let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide sesuai index
function showSlides(index) {
    let slides = document.getElementsByClassName("mySlides");
    if (index >= slides.length) {
        slideIndex = 0
    }
    if (index < 0) {
        slideIndex = slides.length - 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Fungsi untuk mengubah slide menggunakan prev atau next
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk ganti slide otomatis setiap 2 detik
function autoSlide() {
    showSlides(slideIndex += 1);
    setTimeout(autoSlide, 2000); // Ganti gambar setiap 2 detik
}

// Mulai slideshow otomatis saat halaman dimuat
autoSlide();