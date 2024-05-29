// Configurações da API
const API_baseUrl = 'http://[2804:1e68:c219:4de2:6308:5244:fb2b:5bb]:3000';

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
// -- -- -- -- -- -- --//
    // Receita             //
    const base = [1000, 1200, 800];
    // -- -- -- -- -- -- --//
    // Despesas
    const out = [500, 800, 300, 600];
    // -- -- -- -- -- -- --//
    // Somas
    const somIn = base.reduce((totalBase, base) => totalBase + base, 0);
    const somOut = out.reduce((totalOut, out) => totalOut + out, 0);
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

// Buscar do DataBase
async function loadTransactions() {
    const result = await fetch(`${API_baseUrl}/transactions`, {
        method: 'GET'
    })

    const dados = await result.json();
    const dadosSinal = Math.sign(dados.value);

    if (dadosSinal === 1) {
        entryData.push(dados);
    }
    else {
        const dadosSaida = Math.abs(dados);
        outData.push(dados);
    }

    console.log(dados);
}

// Tabela //
// Dados fictícios para a tabela
const entryData = [
    {date: '03/05/2024', description: 'Salário', conta: 'Caixa', value: 2000.00, type: 'Receita'},
    {date: '06/05/2024', description: 'Recebimento', conta: 'Nubank MEI', value: 450.00, type: 'Receita'},
    {date: '06/05/2024', description: 'Recebimento', conta: 'Nubank MEI', value: 450.00, type: 'Receita'},
];

// Função para preencher a tabela com os dados
function entryTable() {
    const table = document.getElementById("entryTable").getElementsByTagName('tbody')[0];

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    entryData.forEach(function (dado) {
        const newRow = table.insertRow(table.length);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.innerHTML = dado.date;
        cell2.innerHTML = dado.description;
        cell3.innerHTML = 'R$ ' + dado.value.toFixed(2);
        cell4.innerHTML = dado.type;
        cell5.innerHTML = dado.conta;
    });
}

// Array de transações de
const outData = [
    {date: '01/05/2024', description: 'Compra de alimentos', conta: 'Nubank Crédito', value: 50.00, type: 'Despesa'},
    {date: '10/05/2024', description: 'Conta de luz', conta: 'Caixa', value: 120.00, type: 'Despesa'},
    {date: '11/05/2024', description: 'Conta de internet', conta: 'Nubank MEI', value: 150.00, type: 'Despesa'},
];

// Adiciona as transações à tabela de saida
function outTable() {
    const table = document.getElementById("outTable");
    const tbody = table.getElementsByTagName('tbody')[0];

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    outData.forEach(function (dado) {
        const newRowOut = tbody.insertRow(tbody.length);

        const cellOut1 = newRowOut.insertCell(0);
        const cellOut2 = newRowOut.insertCell(1);
        const cellOut3 = newRowOut.insertCell(2);
        const cellOut4 = newRowOut.insertCell(3);
        const cellOut5 = newRowOut.insertCell(4);

        cellOut1.innerHTML = dado.date;
        cellOut2.innerHTML = dado.description;
        cellOut3.innerHTML = 'R$ ' + dado.value.toFixed(2);
        cellOut4.innerHTML = dado.type;
        cellOut5.innerHTML = dado.conta;
    });
}


// Array de contas
const accounts = [
    { name: 'Caixa', description: 'Conta de recebimentos' },
    { name: 'Nubank', description: 'Conta corrente' },
    { name: 'Nubank MEI', description: 'Conta de recebimentos' },
    { name: 'Nubank Crédito', description: `Conta de uso` }
];

// Adiciona às contas à aba de seleção no formalário de transações
function acountSection() {
    const accountSelect = document.getElementById('AcountSelect');

    accounts.forEach(account => {
        const accountOption = document.createElement('option');
        accountOption.value = account.name;
        accountOption.textContent = account.name;
        accountSelect.appendChild(accountOption);
    });
}

// Adiciona objetos das contas à tabela
function accountTable() {
    const tableAccount = document.getElementById('accountTable');
    const accountBody = tableAccount.getElementsByTagName(`tbody`)[0];

    while (accountBody.firstChild) {
        accountBody.removeChild(accountBody.firstChild);
    }

    accounts.forEach(function (bank) {
        const newRowAccount = accountBody.insertRow(accountBody.length);

        const accountCell1 = newRowAccount.insertCell(0);
        const accountCell2 = newRowAccount.insertCell(1);

        accountCell1.innerHTML = bank.name;
        accountCell2.innerHTML = bank.description;
    });
}

// Chama a função para preencher a tabela quando a página carrega
window.onload = function () {
    entryTable();
    outTable();
    acountSection();
    accountTable();
    loadTransactions();
};

// Criar nova conta e adiciona a array
function submitAcount(event) {
    event.preventDefault();

    const newAcount = {
        name: document.getElementById('NameAccount').value,
        description: document.getElementById('descriptionAccount').value
    };

    accounts.push(newAcount);

    document.getElementById('NameAccount').value = '';
    document.getElementById('descriptionAccount').value = '';

    console.log(accounts);
    accountTable();
}

// Adicionar objeto a array
async function submitTransaction(event) {

    event.preventDefault();

    // Backend não diferenciou os tipos de transações, apenas leva em consideração o valor
    const transactionSignal = document.querySelector('.TransactionsType input:checked').value === 'Entrada' ? 1 : -1;

    const newTransaction = {
        date: document.getElementById('date').value,
        description: document.getElementById('description').value,
        value: parseFloat(document.getElementById('value').value) * transactionSignal,
        type: document.querySelector('.TransactionsType input:checked').value,
        conta: document.getElementById('AcountSelect').value
    };

    // Envio de dados para o backend
    const result = await fetch(`${API_baseUrl}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTransaction)
    })

    const data = await result.json();
    console.log(data);

    // Remover??
    if (newTransaction.type === 'Entrada') {
        entryData.push(newTransaction);
    } else if (newTransaction.type === 'Saida') {
        outData.push(newTransaction);
    }

    console.log(entryData);
    console.log(outData);

    // Limpa os campos do formulário
    document.getElementById('value').value = '';
    document.getElementById('description').value = '';
    document.getElementById('hour').value = '';

    // Chama a função para preencher a tabela
    entryTable();
    outTable();
}