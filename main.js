const navSlide = () => {
    const atributo = document.querySelector('.atributo');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); 

    atributo.addEventListener('click', () => {
        nav.classList.toggle('nav.active');

        
    navLinks.forEach((link, index) => {
        if(link.style.animation){
           link.style.animation = ''
        } else {
            link.style.animation = ` nav.LinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    });
    });

}

navSlide();