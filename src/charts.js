export default function Charts(chart1, chart2, chart3, chart4) {    
    // Gráficos
    //             Import dos 'canvas'               //
    const chart_1 = chart1;
    const chart_2 = chart2;
    const chart_3 = chart3;
    const chart_4 = chart4;
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
}