const acountForm = document.getElementById('acount');
const categoriesForm = document.getElementById('categories');
const transactionsForm = document.getElementById('transactions');

function showAcount() {
    acountForm.style.display = "block";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
}

function showCategories() {
    acountForm.style.display = "none";
    categoriesForm.style.display = "block";
    transactionsForm.style.display = "none";
}

function showTransactions() {
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "block";
}