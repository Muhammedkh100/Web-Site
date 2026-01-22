window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-bar');
    
    // Eğer sayfa 50px'den fazla aşağı kaydırılırsa 'scrolled' class'ını ekle
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});