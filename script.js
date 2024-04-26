const homePage = document.getElementById('home');
const acountForm = document.getElementById('acount');
const categoriesForm = document.getElementById('categories');
const transactionsForm = document.getElementById('transactions');

function showHome() {
    homePage.style.display = "flex"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
}

function showAcount() {
    homePage.style.display = "none"
    acountForm.style.display = "flex";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
}

function showCategories() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "flex";
    transactionsForm.style.display = "none";
}

function showTransactions() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "flex";
}

// Gráficos
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart');
    var entry = 1000;
    var out = 1000;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Entrada', 'Saida'],
            datasets: [{
                label: '# Entrada | Saida',
                data: [entry, out],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});