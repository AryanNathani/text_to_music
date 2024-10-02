// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form handling for the Create Music page
document.getElementById("music-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const musicPrompt = document.getElementById("musicPrompt").value;
    
    if (musicPrompt.trim() === "") {
        alert("Please describe the music you want to generate!");
    } else {
        alert("Generating music based on: " + musicPrompt);
        // Here you would send `musicPrompt` to your backend or AI model for processing
    }
});
