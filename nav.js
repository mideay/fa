const header = document.querySelector("header.header")
const nav = document.querySelector(".navigation-mobile");
const expandBtn = nav.querySelector(".nav-header button");

expandBtn.addEventListener('click', () => {
    if(nav.classList.contains('expanded')) {
        nav.classList.remove("expanded");
        header.classList.remove("expanded");
    } else {
        nav.classList.add("expanded");
        header.classList.add("expanded");
    }
})