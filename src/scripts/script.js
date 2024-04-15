// Get all links in the navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link
navLinks.forEach(link => {
    // Add click event listener
    link.addEventListener('click', function(event) {
        // Remove the 'current-section' class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('current-section');
        });

        // Get the href value of the clicked link
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' character
        // Add the 'current-section' class to the target section
        document.getElementById(targetId).classList.add('current-section');
    });
});
