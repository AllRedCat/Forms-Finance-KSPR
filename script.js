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
}

function showAcount() {
    homePage.style.display = "none"
    acountForm.style.display = "flex";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
    tablePage.style.display = "none";
}

function showCategories() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "flex";
    transactionsForm.style.display = "none";
    tablePage.style.display = "none";
}

function showTransactions() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "flex";
    tablePage.style.display = "none";
}

function showTable() {
    homePage.style.display = "none"
    acountForm.style.display = "none";
    categoriesForm.style.display = "none";
    transactionsForm.style.display = "none";
    tablePage.style.display = "flex";
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
        primaryNav.setAtribute("data-visible", false);
        navToggle.setAtribute("aria-expanded", false);
    }
})

// Gráficos
document.addEventListener('DOMContentLoaded', function () {
    //             Import dos 'canvas'               //
    const chart_1 = document.getElementById('chart1');
    const chart_2 = document.getElementById('chart2');
    const chart_3 = document.getElementById('chart3');
    const chart_4 = document.getElementById('chart4');
    //-----------------------------------------------//

    // Variáveis para test //
    // Visão geral         //
    var bank = 800;
    var entry = 1000;
    // -- -- -- -- -- -- --//
    // Receita             //
    var base = [1000, 1200, 800];
    // -- -- -- -- -- -- --//
    // Despesas
    var out = [500, 800, 300, 600];
    // -- -- -- -- -- -- --//
    // Somas
    var somIn = base.reduce((totalBase, base) => totalBase + base, 0);
    var somOut = out.reduce((totalOut, out) => totalOut + out, 0);
    // -- -- -- -- -- -- --//
    //---------------------//

    //               Primeiro Gráfico            //
    new Chart(chart_1, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Caixa',
                data: [800, 850, 700, 1000],
                backgroundColor: "#fca311",
                borderColor: "#fca311",
            }, {
                label: 'Entradas',
                data: [1600, 2300, 1700, somIn],
                backgroundColor: "#00aaff",
                borderColor: "#00aaff",
            }, {
                label: 'Despesas',
                data: [1500, 2000, 1800, somOut],
                backgroundColor: "#d63b46",
                borderColor: "#d63b46",
            },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    //------------------------------------------//

    //               Segundo Gráfico            //
    new Chart(chart_2, {
        type: 'bar',
        data: {
            labels: ['Endrata 1', 'Entrada 2', 'Entrada 3'],
            datasets: [{
                label: 'Receita',
                data: [base[0], base[1], base[2]],
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
    //------------------------------------------//

    //              Terceiro Gráfico            //
    new Chart(chart_3, {
        type: 'bar',
        data: {
            labels: ['Saida 1', 'Saida 2', 'Saida 3', 'Saida 4'],
            datasets: [{
                label: 'Dispesas',
                data: [out[0], out[1], out[2], out[3]],
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
    //------------------------------------------//

    //               Quarto Gráfico             //
    new Chart(chart_4, {
        type: 'doughnut', // Tipo de gráfico (doughnut para o gráfico circular)
        data: {
            labels: ['Renda fixa', 'Ações', 'Crypto', 'CDB'], // Rótulos das fatias
            datasets: [{
                data: [600, 500, 300, 200], // Valores das fatias
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(75, 192, 192)',
                ],
                hoverOffset: 4 // Espaço quando a fatia é destacada
            }]
        },
        options: {
            responsive: true, // Tornar o gráfico responsivo
            plugins: {
                legend: {
                    position: 'top' // Posição da legenda
                },
                title: {
                    display: true,
                    text: 'Investimentos'
                }
            }
        }
    });
    //------------------------------------------//
});

// Responsividade //
// Largura da tela

var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function ScreenTest() {
    alert("A resolução da tela é " + screenWidth + " x " + screenHeight);
};

// Function to get Valid IP //
function testIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => console.log(data.ip));
}

// Tabela //
// Dados fictícios para a tabela
var entryData = [
    { date: '03/05/2024', description: 'Salário', value: 2000.00, tipe: 'Receita' },
    { date: '06/05/2024', description: 'Recebimento', value: 450.00, tipe: 'Receita' },
    { date: '06/05/2024', description: 'Recebimento', value: 450.00, tipe: 'Receita' },
];

// Função para preencher a tabela com os dados
function entryTable() {
    var table = document.getElementById("entryTable").getElementsByTagName('tbody')[0];
    
    entryData.forEach(function (dado) {
        var newRow = table.insertRow(table.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = dado.date;
        cell2.innerHTML = dado.description;
        cell3.innerHTML = 'R$ ' + dado.value.toFixed(2);
        cell4.innerHTML = dado.tipe;
    });
};

var outData = [
    { date: '01/05/2024', description: 'Compra de alimentos', value: 50.00, tipe: 'Despesa' },
    { date: '10/05/2024', description: 'Conta de luz', value: 120.00, tipe: 'Despesa' },
    { date: '11/05/2024', description: 'Conta de internet', value: 150.00, tipe: 'Despesa' },
];

function outTable() {
    var table = document.getElementById("outTable");
    var tbody = table.getElementsByTagName('tbody')[0];

    outData.forEach(function (dado) {
        var newRowOut = tbody.insertRow(tbody.length);

        var cellOut1 = newRowOut.insertCell(0);
        var cellOut2 = newRowOut.insertCell(1);
        var cellOut3 = newRowOut.insertCell(2);
        var cellOut4 = newRowOut.insertCell(3);

        cellOut1.innerHTML = dado.date;
        cellOut2.innerHTML = dado.description;
        cellOut3.innerHTML = 'R$ ' + dado.value.toFixed(2);
        cellOut4.innerHTML = dado.tipe;
    });
};


// Chama a função para preencher a tabela quando a página carrega
window.onload = function () {
    entryTable();
    outTable();
};

function reloadTalbe() {
    entryTable();
    outTable();
}

// Adicionar objeto a array

function handleSubmit(event) {

    event.preventDefault();

    var newTransaction = {
        date: document.getElementById('date').value,
        description: document.getElementById('description').value,
        value: parseFloat(document.getElementById('value').value),
        tipe: document.querySelector('.TransactionsType input:checked').value
    };

    if (newTransaction.tipe === 'Entrada') {
        entryData.push(newTransaction);
    } else if (newTransaction.tipe === 'Saida') {
        outData.push(newTransaction);
    }

    document.getElementById('value').value = '';
    document.querySelector('.TransactionsType input:checked').checked = false;
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('acountID').value = '';
    document.getElementById('hour').value = '';
};