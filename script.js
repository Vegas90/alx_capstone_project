// Define a function called toggleMenu
function toggleMenu() {
    // Select the HTML element with the class "menu-links" and store it in the 'menu' variable
    const menu = document.querySelector(".menu-links");
    
    // Select the HTML element with the class "hamburger-icon" and store it in the 'icon' variable
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the "open" class on the 'menu' element, which controls its visibility
    menu.classList.toggle("open");
    
    // Toggle the "open" class on the 'icon' element, which typically changes the hamburger menu icon
    icon.classList.toggle("open");
}

