let navButton = document.querySelectorAll(".nav-btn");
navButton.addEventListener("click", (e) => {
    let target = e.target;
    target.setAttribute(".active")
})