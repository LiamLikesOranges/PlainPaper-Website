/*
===========================================
PlainPaper

script.js

Frontend interactions
===========================================
*/

console.log("📄 PlainPaper Website Loaded");

// ===========================================
// Smooth scrolling
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

// ===========================================
// Fade-in animation
// ===========================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold: 0.15

}

);

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================================
// Active navbar link
// ===========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================================
// Download button ripple effect
// ===========================================

document.querySelectorAll(".primary-btn, .download-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// ===========================================
// Hero typing effect
// ===========================================

const heroTitle = document.querySelector(".hero h1");

const originalText = heroTitle.textContent;

heroTitle.textContent = "";

let i = 0;

function typeWriter() {

    if (i < originalText.length) {

        heroTitle.textContent += originalText.charAt(i);

        i++;

        setTimeout(typeWriter, 80);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 300);

});

// ===========================================
// Footer year
// ===========================================

const footer = document.querySelector("footer p");

footer.innerHTML += "<br><br>© " + new Date().getFullYear() + " PlainPaper";