 
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Dynamic navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.9)';
            }
        });

        // Add some interactive particles effect
        // function createParticle() {
        //     const particle = document.createElement('div');
        //     particle.style.position = 'fixed';
        //     particle.style.width = '4px';
        //     particle.style.height = '4px';
        //     particle.style.background = 'rgba(102, 126, 234, 0.7)';
        //     particle.style.borderRadius = '50%';
        //     particle.style.pointerEvents = 'none';
        //     particle.style.zIndex = '999';
        //     particle.style.left = Math.random() * 100 + 'vw';
        //     particle.style.top = '100vh';
        //     particle.style.animation = 'floatUp 8s linear forwards';
            
        //     document.body.appendChild(particle);
            
        //     setTimeout(() => {
        //         particle.remove();
        //     }, 8000);
        // }

        // // Add floating particle animation
        // const style = document.createElement('style');
        // style.textContent = `
        //     @keyframes floatUp {
        //         to {
        //             transform: translateY(-100vh) rotate(360deg);
        //             opacity: 0;
        //         }
        //     }
        // `;
        // document.head.appendChild(style);

        // // Create particles periodically
        // setInterval(createParticle, 3000);
    