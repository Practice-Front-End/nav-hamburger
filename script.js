// Create variable that selects the "hamburger-menu" div (to toggle)
const menuIcon = document.querySelector(".hamburger-menu");

// Create a variable that selects the "navbar" (to use in below function)
const navbar = document.querySelector(".navbar");


// Attach an eventListener to "menuIcon" that takes two arguments: Pass the name of the event ('click'), then pass the function
menuIcon.addEventListener("click", () => {
    // classList property returns the classnames of an element as a DOMTokenList object 
    // the toggle() method adds a class to the list if it does not exist (changes return value to true)
    navbar.classList.toggle("toggle-change");
});

