// Importar outros arquivos js
import charts from "./charts.js";
import AccountTable from "./account.js";
import loadTransactions from "./loadTransactions.js";

// Configurações da API
const API = 'http://[2804:1e68:c219:1d1f:b8f9:458c:ebc9:9527]:3000';

// Função para carregar os itens quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    
    // Teste de importação de gráficos
    const chart1 = document.getElementById('chart1');
    const chart2 = document.getElementById('chart2');
    const chart3 = document.getElementById('chart3');
    const chart4 = document.getElementById('chart4');
    
    charts(chart1, chart2, chart3, chart4);
    
    // Array de teste de contas
    const accounts = [
        {name: 'Caixa', description: 'Conta de recebimentos'},
        {name: 'Nubank', description: 'Conta corrente'},
        {name: 'Nubank MEI', description: 'Conta de recebimentos'},
        {name: 'Nubank Crédito', description: `Conta de uso`}
    ];
    
    // Importar tabela de contas
    const tableAccount = document.getElementById('accountTable');
    const accountBody = tableAccount.getElementsByTagName(`tbody`)[0];
    
    AccountTable(accountBody, accounts);

    loadTransactions();

    console.log("DOMContentLoaded");
});


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

// Criar nova conta e adiciona a array
function submitAccount(event) {
    event.preventDefault();

    const newAcount = {
        name: document.getElementById('NameAccount').value,
        description: document.getElementById('descriptionAccount').value
    };

    accounts.push(newAcount);

    document.getElementById('NameAccount').value = '';
    document.getElementById('descriptionAccount').value = '';

    console.log(accounts);
    AccountTable(accountBody, accounts);
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
    const result = await fetch(`${API}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTransaction)
    })

    const data = await result.json();
    console.log(data);

    // Limpa os campos do formulário
    document.getElementById('value').value = '';
    document.getElementById('description').value = '';
    document.getElementById('hour').value = '';
}

// Chama a função para preencher a tabela quando a página carrega
window.onload = function () {
//    acountSection();
    console.log("Pagina carregou");
}