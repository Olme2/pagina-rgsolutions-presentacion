// ... existing code ...

// Inicialización de AOS (Animate On Scroll)
AOS.init();

// HERO VIDEO & TEXT ANIMATION
window.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('hero-bg-video');
    var textContainer = document.getElementById('hero-text-container');
    var typedInstance = null;

    // Verificar si el video existe antes de añadir el evento
    if (video) {
        video.onended = function() {
            video.classList.add('hero-blur');
            if (textContainer) {
                textContainer.classList.remove('opacity-0', 'pointer-events-none');
                textContainer.classList.add('opacity-100');
                // Iniciar Typed.js solo cuando el texto es visible
                if (!typedInstance) {
                    typedInstance = new Typed('#typed-text', {
                        strings: [
                            'Soluciones de Contacto Avanzadas',
                            'Automatización Inteligente',
                            'Atención Omnicanal 24/7',
                            'Tecnología para tu Negocio',
                            'Experiencia de Cliente de Excelencia'
                        ],
                        typeSpeed: 55,
                        backSpeed: 30,
                        backDelay: 2000,
                        loop: true,
                        showCursor: true,
                        cursorChar: '|'
                    });
                }
            }
        };
         // Si el video ya ha terminado o no tiene sonido, mostrar el texto inmediatamente
        if (video.ended || video.muted) {
             if (textContainer) {
                video.classList.add('hero-blur');
                textContainer.classList.remove('opacity-0', 'pointer-events-none');
                textContainer.classList.add('opacity-100');
                 // Iniciar Typed.js
                 if (!typedInstance) {
                    typedInstance = new Typed('#typed-text', {
                        strings: [
                            'Soluciones de Contacto Avanzadas',
                            'Automatización Inteligente',
                            'Atención Omnicanal 24/7',
                            'Tecnología para tu Negocio',
                            'Experiencia de Cliente de Excelencia'
                        ],
                        typeSpeed: 55,
                        backSpeed: 30,
                        backDelay: 2000,
                        loop: true,
                        showCursor: true,
                        cursorChar: '|'
                    });
                }
            }
        }

    }


    // Inicialización de animaciones globales con GSAP (ajustar selectores si es necesario)
    // Asegúrate de que los selectores '.service-card', '.product-card', '.main-title', '.neon-button' existan en tu HTML estático

    // Animación para las tarjetas de servicios
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power2.out"
        });
    });

    // Animación para las tarjetas de productos
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out"
        });
    });

    // Animación para el título principal (si tienes un elemento con clase .main-title)
    gsap.utils.toArray('.main-title').forEach(title => {
         gsap.from(title, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Animación para los botones con clase .neon-button
    gsap.utils.toArray('.neon-button').forEach(button => {
        gsap.from(button, {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
             scrollTrigger: {
                trigger: button,
                start: "top bottom-=50", // Un poco antes de que el botón entre en la vista
                toggleActions: "play none none reverse"
            }
        });
    });

    // Inicializar Swiper para productos destacados
     if (document.querySelector('.productSwiper')) {
        new Swiper('.productSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }


    // Inicializar Lottie (asegúrate de que los contenedores existan en tu HTML)
    // Puedes comentar o eliminar esto si no usas Lottie animaciones
    // lottie.loadAnimation({
    //     container: document.getElementById('lottie-service1'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'https://assets2.lottiefiles.com/packages/lf20_xyadoh9h.json'
    // });
    // lottie.loadAnimation({
    //     container: document.getElementById('lottie-service2'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'https://assets9.lottiefiles.com/packages/lf20_49rdyysj.json'
    // });
    // lottie.loadAnimation({
    //     container: document.getElementById('lottie-service3'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json'
    // });

}); 