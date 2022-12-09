const fs = require('fs');
const lines = fs.readFileSync('./2021_CO_tyg.json', 'utf8');
const data = JSON.parse(lines);
const newData = {
    // labels: [
    //     'Styczeń',
    //     'Luty',
    //     'Marzec',
    //     'Kwiecień',
    //     'Maj',
    //     'Czerwiec',
    //     'Lipiec',
    //     'Sierpień',
    //     'Wrzesień',
    //     'Październik',
    //     'Listopad',
    //     'Grudzień',
    // ],
    // labels: [
    //     '0',
    //     '1',
    //     '2',
    //     '3',
    //     '4',
    //     '5',
    //     '6',
    //     '7',
    //     '8',
    //     '9',
    //     '10',
    //     '11',
    //     '12',
    //     '13',
    //     '14',
    //     '15',
    //     '16',
    //     '17',
    //     '18',
    //     '19',
    //     '20',
    //     '21',
    //     '22',
    //     '23',
    // ],
    labels: [
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek',
        'Sobota',
        'Niedziela',
    ],
    datasets: [],
};

for (const key of Object.keys(data[0])) {
    if (key == 'Dzień Tygodnia') continue;
    const values = [];
    for (let i = 0; i < data.length; i++) {
        values.push(data[i][key]);
    }
    newData.datasets.push({
        id: key,
        label: `Poziom CO (ug/m^3) ${key}`,
        data: values,
        fill: false,
        borderColor: 'rgb(255, 134,159)',
        tension: 0.2,
    });
}
console.log(JSON.stringify(newData));
