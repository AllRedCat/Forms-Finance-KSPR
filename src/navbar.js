const homePage = document.getElementById('home');
const acountForm = document.getElementById('acount');
const categoriesForm = document.getElementById('categories');
const transactionsForm = document.getElementById('transactions');
const tablePage = document.getElementById('table');

function showHome() {
    homePage.style.display = "grid"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
    tablePage.style.display = "none";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

function showAcount() {
    homePage.style.display = "none"
    acountForm.style.display = "flex";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
    tablePage.style.display = "none";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

// function showCategories() {
//     homePage.style.display = "none"
//     acountForm.style.display = "none";
//     categoriesForm.style.display = "flex";
//     transactionsForm.style.display = "none";
//     tablePage.style.display = "none";
//     primaryNav.setAttribute("data-visible", false);
//     navToggle.setAttribute("aria-expanded", false);
// }

function showTransactions() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "flex";
    tablePage.style.display = "none";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

function showTable() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
    tablePage.style.display = "flex";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

// Botão da nav bar
const navToggle = document.getElementById('navBtn');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})