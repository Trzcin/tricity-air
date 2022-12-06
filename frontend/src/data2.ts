export const lineData = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    datasets: [
      {
        id: 'CO',
        label: 'Poziom CO (mg/m^3)',
        data: [0.51, 0.47, 0.63, 0.52, 0.49, 0.67, 0.55, 0.45, 0.58, 0.69, 0.41, 0.55],
        fill: false,
        borderColor: 'rgb(255, 134,159)',
        tension: 0.2
      },
      {
        id: 'NO2',
        label: 'Poziom NO2 (mg/m^3)',
        data: [0.113, 0.12, 0.18, 0.13, 0.16, 0.09, 0.1, 0.19, 0.11, 0.08, 0.14, 0.12],
        fill: false,
        borderColor: 'rgb(98,  182, 239)',
        tension: 0.3
      },
      {
        id: 'PM10',
        label: 'Poziom PM10 (mg/m^3)',
        data: [0.73, 0.45, 0.32, 0.57, 0.28, 0.62, 0.24, 0.55, 0.64, 0.61, 0.43, 0.37 ],
        fill: false,
        borderColor: 'rgb(255, 218, 128)',
        tension: 0.3
      }
    ],
  };
