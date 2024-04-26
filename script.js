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
    const chart_3 = document.getElementById('chart3');
    const chart_4 = document.getElementById('chart4');
    const chart_5 = document.getElementById('chart5');

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
    
    var out1 = 500
    var out2 = 800
    var out3 = 300
    var out4 = 600

    new Chart(chart_3, {
        type: 'bar',
        data: {
            labels: ['Saida 1', 'Saida 2', 'Saida 3', 'Saida 4'],
            datasets: [{
                label: 'Dispesas',
                data: [out1, out2, out3, out4],
                backgroundColor: "#d63b46",
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