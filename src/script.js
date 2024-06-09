// Importar outros arquivos js
import charts from "./charts.js";
import { AccountTable, accountSection } from "./account.js";
import loadTransactions from "./loadTransactions.js";

// Configurações da API
const API = 'http://[2804:1e68:c219:fe0e:f378:b57c:1f7f:45f1]:3000';

// Array de teste de contas
export const accounts = [
    {name: 'Caixa', description: 'Conta de recebimentos'},
    {name: 'Nubank', description: 'Conta corrente'},
    {name: 'Nubank MEI', description: 'Conta de recebimentos'},
    {name: 'Nubank Crédito', description: `Conta de uso`}
];

// Função para carregar os itens quando a página carrega

document.addEventListener('DOMContentLoaded', function () {
    
    // Teste de importação de gráficos
    const chart1 = document.getElementById('chart1');
    const chart2 = document.getElementById('chart2');
    const chart3 = document.getElementById('chart3');
    const chart4 = document.getElementById('chart4');
    
    charts(chart1, chart2, chart3, chart4);
    
    // Importar tabela de contas
    const tableAccount = document.getElementById('accountTable');
    const accountBody = tableAccount.getElementsByTagName(`tbody`)[0];
    
    AccountTable(accountBody, accounts);

    accountSection(accounts);

    console.log("DOMContentLoaded");
});

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
//
//// Adicionar objeto a array
//async function submitTransaction(event) {
//
//    event.preventDefault();
//
//    // Backend não diferenciou os tipos de transações, apenas leva em consideração o valor
//    const transactionSignal = document.querySelector('.TransactionsType input:checked').value === 'Entrada' ? 1 : -1;
//
//    const newTransaction = {
//        date: document.getElementById('date').value,
//        description: document.getElementById('description').value,
//        value: parseFloat(document.getElementById('value').value) * transactionSignal,
//        type: document.querySelector('.TransactionsType input:checked').value,
//        conta: document.getElementById('AcountSelect').value
//    };
//
//    // Envio de dados para o backend
//    const result = await fetch(`${API}/transactions`, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(newTransaction)
//    })
//
//    const data = await result.json();
//    console.log(data);
//
//    // Limpa os campos do formulário
//    document.getElementById('value').value = '';
//    document.getElementById('description').value = '';
//    document.getElementById('hour').value = '';
//}