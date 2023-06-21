// menu toggle 
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
})

// menu list toggle
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
})