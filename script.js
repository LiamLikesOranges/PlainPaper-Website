/*
===========================================
PlainPaper — Marketing Site
script.js
===========================================
*/

// ===========================================
// Smooth scroll for in-page links
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ===========================================
// Navbar background on scroll
// ===========================================

const navbar = document.getElementById("navbar");

const setNavbarState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
};

setNavbarState();
window.addEventListener("scroll", setNavbarState, { passive: true });

// ===========================================
// Scroll-reveal for sections and cards
// ===========================================

const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// Stagger bento cards slightly for a more orchestrated feel
document.querySelectorAll(".bento-card.reveal").forEach((card, i) => {
    card.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
});

// ===========================================
// Active nav link on scroll
// ===========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

const setActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

// ===========================================
// Footer year
// ===========================================

const footerYear = document.getElementById("footer-year");
if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} PlainPaper`;
}