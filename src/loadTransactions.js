export default async function loadTransactions(api) {
    // API to get transactions
    const API = api;

    console.log("Iniciou o carregamento de transações");
    const result = await fetch(`${API}/transactions`, {
        method: 'GET'
    })

    try {
        const dados = await result.json();

        // teste de ano
        const dadosDate = dados.map(dados => {
            const completeDate = new Date(dados.date);
            const ano = completeDate.getFullYear();
            const mes = completeDate.getMonth();
            const dia = completeDate.getDate();
            return `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
        });

        // teste json
        console.log(dados, dadosDate);

        /*
        "dados" retorna um json
        Cada objeto do json possui os seguites itens
        account:, category:, date:, description:, id:, value:
         */
        const dadosEntrada = dados.filter(objeto => objeto.value > 0);
        const dadosSaida = dados.filter(objeto => objeto.value < 0);
        /*
        Usando o 'filter()' eu criei dois objetos diferentes
        Um com os valores positivos e outro com os valores negativos
        Um para entrada e outro para saida
        */

        // Importando as tabelas e tbody do DOM
        const tabelaEntrada = document.getElementById("entryTable");
        const tbodyEntrada = tabelaEntrada.getElementsByTagName('tbody')[0];
        const tabelaSaida = document.getElementById("outTable");
        const tbodySaida = tabelaSaida.getElementsByTagName('tbody')[0];

        // Remove os itens que estavam nas tabelas
        while (tbodyEntrada.firstChild) {
            tbodyEntrada.removeChild(tbodyEntrada.firstChild);
        }
        while (tbodySaida.firstChild) {
            tbodySaida.removeChild(tbodySaida.firstChild);
        }

        // Insere dados na tabela de entrada
        dadosEntrada.forEach(function (dado) {
            const newRow = tabelaEntrada.insertRow(tabelaEntrada.length);

            const completeDate = new Date(dado.date);
            const ano = completeDate.getFullYear();
            const mes = completeDate.getMonth();
            const dia = completeDate.getDate();
            const dateFomat = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            cell1.innerHTML = dado.accountId;
            cell2.innerHTML = dado.categoryId;
//            cell3.innerHTML = dado.date;
            cell3.innerHTML = dateFomat;
            cell4.innerHTML = dado.description;
            cell5.innerHTML = 'R$ ' + dado.value.toFixed(2);
        })

        // Insere dados na tabela de saida
        dadosSaida.forEach(function (dadoSaida) {
            const newRow = tabelaSaida.insertRow(tabelaEntrada.length);

            const completeDateSaida = new Date(dadoSaida.date);
            const ano = completeDateSaida.getFullYear();
            const mes = completeDateSaida.getMonth();
            const dia = completeDateSaida.getDate();
            const dateFomat = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            cell1.innerHTML = dadoSaida.accountId;
            cell2.innerHTML = dadoSaida.categoryId;
            cell3.innerHTML = dateFomat;
            cell4.innerHTML = dadoSaida.description;
            cell5.innerHTML = 'R$ ' + dadoSaida.value.toFixed(2);
        })
    } catch (erro) {
        console.error('Deu erro: ', erro);
    }
}