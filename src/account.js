export function AccountTable(tbody, accounts) {

    const accountBody = tbody;

    var accounts = accounts;
    
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

// Adiciona às contas à aba de seleção no formalário de transações
export function accountSection(accounts) {
    const accountSelect = document.getElementById('AcountSelect');

    accounts.forEach(account => {
        const accountOption = document.createElement('option');
        accountOption.value = account.name;
        accountOption.textContent = account.name;
        accountSelect.appendChild(accountOption);
    });
}