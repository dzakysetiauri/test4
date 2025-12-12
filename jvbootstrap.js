// JavaScript untuk menambahkan kelas 'scrolled' ke navbar saat di-scroll
// Ini bisa digunakan untuk mengubah gaya navbar setelah user menggulir halaman
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Jika user scroll lebih dari 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // JavaScript untuk smooth scroll pada link navigasi
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default link (lompat langsung)

            const targetId = this.getAttribute('href'); // Dapatkan ID target dari atribut href
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Gulir ke bagian target dengan efek halus
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight, // Kurangi tinggi navbar agar tidak tertutup
                    behavior: 'smooth'
                });
            }

            // Untuk menutup navbar toggler di mode mobile setelah klik
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    });

    console.log("JavaScript kustom dimuat!");
});