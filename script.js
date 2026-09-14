// ==========================================
// TYPING ANIMATION
// ==========================================
const traits = [
    "11th Grader",
    "Programmer",
    "Cybersecurity Student",
    "Game Developer",
    "Machine Enthusiast",
    "Selected PRAYAAS Candidate",
    "Football Lover ⚽",
    "Motorsports Lover 🏎️"
];

const TYPING_SPEED = 120;
const ERASING_SPEED = 60;
const PAUSE_AFTER_WORD = 1800;
const PAUSE_AFTER_ERASE = 400;

let traitIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedTextElement = document.getElementById("typed-text");

function typeEffect() {
    const currentTrait = Array.from(traits[traitIndex]);

    if (isDeleting) {
        charIndex--;
        typedTextElement.textContent = currentTrait.slice(0, charIndex).join('');

        if (charIndex === 0) {
            isDeleting = false;
            traitIndex = (traitIndex + 1) % traits.length;
            setTimeout(typeEffect, PAUSE_AFTER_ERASE);
            return;
        }
        setTimeout(typeEffect, ERASING_SPEED);

    } else {
        charIndex++;
        typedTextElement.textContent = currentTrait.slice(0, charIndex).join('');

        if (charIndex === currentTrait.length) {
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_AFTER_WORD);
            return;
        }
        setTimeout(typeEffect, TYPING_SPEED);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 800);
});

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.85);
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.style.width = progressValue + '%';
            bar.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
