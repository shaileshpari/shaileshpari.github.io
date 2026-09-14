// ==========================================
// TYPING ANIMATION - The "Hacker Terminal" Effect
// ==========================================

// The list of traits to cycle through
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

// Speed settings (in milliseconds)
const TYPING_SPEED = 120;        // How fast we type each letter
const ERASING_SPEED = 60;        // How fast we erase (faster = feels natural)
const PAUSE_AFTER_WORD = 1800;   // Pause after finishing a word
const PAUSE_AFTER_ERASE = 400;   // Pause before starting the next word

// Tracking variables
let traitIndex = 0;    // Which trait are we on? (0, 1, 2, ...)
let charIndex = 0;     // Which character are we on?
let isDeleting = false; // Are we typing or erasing right now?

// Get the element where text will appear
const typedTextElement = document.getElementById("typed-text");

// The main function that runs over and over
function typeEffect() {
    // Get the current trait as an array of characters
    // (Array.from handles emojis like ⚽ and 🏎️ correctly)
    const currentTrait = Array.from(traits[traitIndex]);

    if (isDeleting) {
        // ERASING MODE: Remove one character
        charIndex--;
        typedTextElement.textContent = currentTrait.slice(0, charIndex).join('');

        // If we've erased everything...
        if (charIndex === 0) {
            isDeleting = false;
            // Move to the next trait (loop back to 0 if at the end)
            traitIndex = (traitIndex + 1) % traits.length;
            setTimeout(typeEffect, PAUSE_AFTER_ERASE);
            return;
        }
        // Otherwise, keep erasing
        setTimeout(typeEffect, ERASING_SPEED);

    } else {
        // TYPING MODE: Add one character
        charIndex++;
        typedTextElement.textContent = currentTrait.slice(0, charIndex).join('');

        // If we've typed the whole word...
        if (charIndex === currentTrait.length) {
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_AFTER_WORD);
            return;
        }
        // Otherwise, keep typing
        setTimeout(typeEffect, TYPING_SPEED);
    }
}

// Start the animation once the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 800); // Small delay before starting
});

// ==========================================
// SKILL BARS ANIMATION - Animate when scrolled into view
// ==========================================

// Get all skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');

// Function to animate skill bars
function animateSkillBars() {
    skillBars.forEach(bar => {
        const progressBar = bar;
        const progressValue = progressBar.getAttribute('data-progress');
        
        // Check if the element is in the viewport
        const rect = progressBar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        // If visible and not already animated
        if (isVisible && !progressBar.classList.contains('animated')) {
            // Animate the width
            progressBar.style.width = progressValue + '%';
            progressBar.classList.add('animated');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', animateSkillBars);

// Also run once on page load (in case skills section is already visible)
window.addEventListener('load', animateSkillBars);
