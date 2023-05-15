window.addEventListener("scroll", function () {
    var navpost = document.querySelector(".navpost-sticky");
    var scrollposition = window.scrollY;
    var windowheight = window.innerHeight;
    var threshold = windowheight * 0.3; // 30% of the window height

    if (scrollposition > threshold) {
        navpost.classList.add("show");
    } else {
        navpost.classList.remove("show");
    }
});

const divQuestions = document.querySelectorAll('.divquestion');

divQuestions.forEach(div => {
    const bouton = div.querySelector('.bouton2');
    const contenu = div.querySelector('.contenu');

    bouton.addEventListener('click', function () {
        contenu.classList.toggle('visible');
        bouton.classList.toggle('active');
        if (bouton.classList.contains('active')) {
            bouton.querySelector('.croix').textContent = '-';
        } else {
            bouton.querySelector('.croix').textContent = '+';
        }
    });
});