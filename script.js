const homePage = document.getElementById('home');
const acountForm = document.getElementById('acount');
const categoriesForm = document.getElementById('categories');
const transactionsForm = document.getElementById('transactions');

function showHome() {
    homePage.style.display = "block"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
}

function showAcount() {
    homePage.style.display = "none"
    acountForm.style.display = "block";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
}

function showCategories() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "block";
    transactionsForm.style.display = "none";
}

function showTransactions() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "block";
}