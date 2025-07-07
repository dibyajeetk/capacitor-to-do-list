let navButton = document.querySelectorAll(".nav-btn");
let body = document.querySelector("#body");
const topBarTitle = document.querySelector("#title-top")
topBarTitle.setAttribute("style", "text-transform: uppercase;")


// active state
navButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //set active state
    navButton.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");


    //get which page to load
    const page = btn.dataset.page;
    loadPage(page);
  });
});

// load pages
function loadPage(page) {
    switch (page) {
        case "home":
            aboutPage();
            // update topbar
            topBarTitle.textContent = 'home';
        break;
        case "tasks":
            taskPage()
            // update topbar
            topBarTitle.textContent = 'tasks';
        break;
        case "notes":
            aboutPage()
            // update topbar
            topBarTitle.textContent = 'notes';
        break;
        case "about":
            aboutPage()
            // update topbar
            topBarTitle.textContent = 'about';
        break;
        default:
            aboutPage()
  }
}

//pages
function aboutPage() {
    //main container
    body.innerHTML = ''; // clears extra divs
    const wrapper = document.createElement("div");
    body.appendChild(wrapper);
    wrapper.setAttribute("id", "wrapper");

    // heading
    // const heading = document.createElement("p");
    // wrapper.appendChild(heading);
    // heading.textContent = "About Simple To-Dos"
    // heading.setAttribute("id", "heading")

    // author
    const author = document.createElement("p");
    wrapper.appendChild(author);
    author.textContent = 'Author: Dibyajeet Kirttania'
    author.setAttribute("style", "margin-bottom: 0.25rem")

    // version
    const version = document.createElement("p");
    wrapper.appendChild(version);
    version.textContent = 'version: 0.0.1 (beta)'
}

function taskPage() {
    //main container
    body.innerHTML = ''; // clears extra divs
    const wrapper = document.createElement("div");
    body.appendChild(wrapper);
    wrapper.setAttribute("id", "wrapper");
}