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

// Gráficos
document.addEventListener('DOMContentLoaded', function () {
    //             Import dos 'canvas'               //
    const chart_1 = document.getElementById('chart1');
    const chart_2 = document.getElementById('chart2');
    const chart_3 = document.getElementById('chart3');
    const chart_4 = document.getElementById('chart4');
    // const chart_5 = document.getElementById('chart5').getContext('2d');
    // const chart_6 = document.getElementById('chart6');
    // const chart_7 = document.getElementById('chart7');
    //-----------------------------------------------//

    // Variáveis para test //
    // Visão geral         //
    var bank = 800;
    var entry = 1000;
    var out = 700;
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
                data: [bank, entry, out, 1000],
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

    //               Quinto Gráfico             //
    // Dados iniciais
    const metas = ['Casa', 'Servidor', 'Carro'];
    let valores = [1200, 2200, 14000];
    // const valoresTotais = [3000, 3000, 28000];

    // Atualizar dados do gráfico
    function atualizarGrafico() {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: metas,
                datasets: [{
                    label: 'Metas Financeiras',
                    data: valores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    atualizarGrafico();
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
var dadosFinanceiros = [
    { data: '2024-05-01', descricao: 'Compra de alimentos', valor: 50.00, tipo: 'Despesa' },
    { data: '2024-05-03', descricao: 'Salário', valor: 2000.00, tipo: 'Receita' },
    { data: '2024-05-10', descricao: 'Conta de luz', valor: 120.00, tipo: 'Despesa' },
  ];
  
  // Função para preencher a tabela com os dados
  function preencherTabela() {
    var table = document.getElementById("financeTable").getElementsByTagName('tbody')[0];
    
    dadosFinanceiros.forEach(function(dado) {
      var newRow = table.insertRow(table.length);
      
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
  
      cell1.innerHTML = dado.data;
      cell2.innerHTML = dado.descricao;
      cell3.innerHTML = 'R$ ' + dado.valor.toFixed(2);
      cell4.innerHTML = dado.tipo;
    });
  }
  
  // Chama a função para preencher a tabela quando a página carrega
  window.onload = function() {
    preencherTabela();
  };
  