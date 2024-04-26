const homePage = document.getElementById('home');
const acountForm = document.getElementById('acount');
const categoriesForm = document.getElementById('categories');
const transactionsForm = document.getElementById('transactions');

function showHome() {
    homePage.style.display = "grid"
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
    const chart_1 = document.getElementById('chart1');
    const chart_2 = document.getElementById('chart2');

    var bank = 800;
    var entry = 1000;
    var out = 700;
    
    new Chart(chart_1, {
        type: 'bar',
        data: {
            labels: ['Caixa', 'Entrada', 'Saida'],
            datasets: [{
                label: 'Visão geral',
                data: [bank, entry, out],
                backgroundColor: "#fca311",
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var base1 = 1000
    var base2 = 1200
    var base3 = 800

    new Chart(chart_2, {
        type: 'bar',
        data: {
            labels: ['Endrata 1', 'Entrada 2', 'Entrada 3'],
            datasets: [{
                label: 'Receita',
                data: [base1, base2, base3],
                backgroundColor: "#00aaff",
            }],
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