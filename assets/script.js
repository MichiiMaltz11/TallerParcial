const testimonios = document.querySelector('.testimonios');
const nextButtonT = document.getElementById('next-testimonio');
const prevButtonT = document.getElementById('prev-testimonio');
const testimonioItems = document.querySelectorAll('.testimonio');

let currentTestimonio = 0;
const totalTestimonios = testimonioItems.length;

function updateTestimonios(index) {
    testimonioItems.forEach((testimonio, i) => {
        testimonio.classList.remove('central-slide', 'left-slide', 'right-slide');

        if (i === index) {
            testimonio.classList.add('central-slide');
        } else if (i === (index - 1 + totalTestimonios) % totalTestimonios) {
            testimonio.classList.add('left-slide');
        } else if (i === (index + 1) % totalTestimonios) {
            testimonio.classList.add('right-slide');
        }
    });

    testimonios.style.transform = `translateX(-${index * 100}%)`;
}

nextButtonT.addEventListener('click', () => {
    currentTestimonio = (currentTestimonio + 1) % totalTestimonios;
    updateTestimonios(currentTestimonio);
});

prevButtonT.addEventListener('click', () => {
    currentTestimonio = (currentTestimonio - 1 + totalTestimonios) % totalTestimonios;
    updateTestimonios(currentTestimonio);
});

let autoSlideInterval = setInterval(() => {
    currentTestimonio = (currentTestimonio + 1) % totalTestimonios;
    updateTestimonios(currentTestimonio);
}, 4000);

testimonios.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

testimonios.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(() => {
        currentTestimonio = (currentTestimonio + 1) % totalTestimonios;
        updateTestimonios(currentTestimonio);
    }, 4000);
});

updateTestimonios(currentTestimonio);

const modal = document.getElementById('modal-cotizacion');
const btnCTA = document.querySelector('.btn-cta');
const closeBtn = document.querySelector('.close');

btnCTA.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
