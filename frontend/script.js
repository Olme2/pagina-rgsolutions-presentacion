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

// Video Background Handler
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    const heroContent = document.getElementById('hero-text-content');
    
    // Crear la timeline principal
    const heroTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out",
            duration: 1
        }
    });

    // Configurar la secuencia de animación
    heroTimeline
        // Fade in del contenedor principal
        .to(heroContent, {
            opacity: 1,
            duration: 0.5
        })
        // Animación del logo
        .from('.hero-logo', {
            y: -30,
            opacity: 0,
            duration: 1
        })
        // Animación del título línea por línea
        .from('.text-reveal-mask span', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.5")
        // Animación de la línea decorativa
        .to('.hero-divider', {
            width: "100px",
            opacity: 1,
            duration: 0.8
        }, "-=0.3")
        // Animación del subtítulo
        .from('.hero-subtitle', {
            y: 20,
            opacity: 0,
            duration: 1
        }, "-=0.3")
        // Animación de los botones
        .from('.btn', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        }, "-=0.5");

    // Función para iniciar la animación cuando el video termine
    function startHeroAnimation() {
        // Aplicar blur al video
        video.classList.add('hero-blur');
        // Iniciar la timeline
        heroTimeline.play();
    }

    // Event listener para el final del video
    if (video) {
        video.addEventListener('ended', startHeroAnimation);
    }

    // Fallback en caso de error del video
    video.addEventListener('error', function() {
        console.error('Error al cargar el video');
        startHeroAnimation();
    });

    // Configuración de máximos para barras no porcentuales
    const maxClientes = 150; // Puedes ajustar este valor si el máximo cambia
    const maxProyectos = 200;

    document.querySelectorAll('.stat-bar').forEach(bar => {
        const parent = bar.closest('.stat-card');
        let value = 0;
        let width = 0;
        // Busca el valor en el número de la estadística
        const statNumber = parent.querySelector('.stat-number');
        if (statNumber) {
            let raw = statNumber.getAttribute('data-value') || statNumber.textContent;
            raw = raw.replace(/[^\d%]/g, '');
            value = parseInt(raw);
        }
        if (parent && parent.textContent.includes('Ventas')) {
            width = value; // 85%
        } else if (parent && parent.textContent.includes('ROI')) {
            width = value; // 70%
        } else if (parent && parent.textContent.includes('Clientes')) {
            width = Math.min(100, Math.round((value / maxClientes) * 100));
        } else if (parent && parent.textContent.includes('Proyectos')) {
            width = Math.min(100, Math.round((value / maxProyectos) * 100));
        }
        bar.style.width = width + '%';
    });
});

// Navbar Animations
document.addEventListener('DOMContentLoaded', function() {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Variables para el control del scroll
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Animación inicial de los enlaces del menú
    gsap.from(navLinks, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Control del scroll para mostrar/ocultar la navbar
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        const currentScroll = window.pageYOffset;
        
        // Determinar la dirección del scroll
        if (currentScroll <= 0) {
            nav.classList.remove('nav-hidden');
            nav.classList.add('nav-visible');
            return;
        }
        
        if (currentScroll > lastScroll && !nav.classList.contains('nav-hidden')) {
            // Scroll hacia abajo
            nav.classList.remove('nav-visible');
            nav.classList.add('nav-hidden');
        } else if (currentScroll < lastScroll && nav.classList.contains('nav-hidden')) {
            // Scroll hacia arriba
            nav.classList.remove('nav-hidden');
            nav.classList.add('nav-visible');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
}); 