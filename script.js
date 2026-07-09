// ===============================
// DOM READY
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // HEADER SCROLL EFFECT
    // ===============================
    const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

});
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    // ===============================
    // REVEAL ANIMATION
    // ===============================

    const revealElements = document.querySelectorAll(
        ".section, .card, .timeline-item, .gallery-item, .number-card"
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    // ===============================
    // COUNTER ANIMATION
    // ===============================

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    function animateCounter(counter) {

        const target = +counter.dataset.target;

        const duration = 2000;

        const increment = target / 120;

        let current = 0;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    }


    // ===============================
    // ACTIVE MENU LINK
    // ===============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.clientHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active-link");

            }

        });

    });


    // ===============================
    // HERO PARALLAX EFFECT
    // ===============================

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY =
            scroll * 0.5 + "px";

    });


    // ===============================
    // GALLERY HOVER GLOW
    // ===============================

    const galleryImages =
        document.querySelectorAll(".gallery img");

    galleryImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.boxShadow =
                "0 20px 40px rgba(212,175,55,.45)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.boxShadow = "none";

        });

    });


    // ===============================
    // SMOOTH BUTTON EFFECT
    // ===============================

    const buttons = document.querySelectorAll(
        ".btn, .btn-outline"
    );

    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            button.style.setProperty(
                "--x",
                x + "px"
            );

            button.style.setProperty(
                "--y",
                y + "px"
            );

        });

    });


    // ===============================
    // TIMELINE APPEAR DELAY
    // ===============================

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 0.15}s`;

    });


    // ===============================
    // FLOATING CARDS
    // ===============================

    const cards =
        document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.animation =
            `floatCard 5s ease-in-out ${
                index * 0.3
            }s infinite`;

    });

});


// ===============================
// FLOATING CARD ANIMATION
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatCard {

    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }

}

.active-link {

    color: #d4af37 !important;

}

`;

document.head.appendChild(style);


// ===============================
// LOADING FADE
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document
.querySelectorAll("nav ul a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

    });

});
const overlay =
document.querySelector(".menu-overlay");

menuToggle.addEventListener("click",()=>{

    overlay.classList.toggle("active");

});

overlay.addEventListener("click",()=>{

    menuToggle.classList.remove("active");

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

});
