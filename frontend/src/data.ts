export const barData = {
    labels: ['Gdynia Porębskiego', 'Gdynia Szafranowa', 'Sopot Bitwy pod Płowcami', 'Gdańsk Powstańców Wielkopolskich', 'Gdańsk Wyzwolenia', 'Gdańsk Leczkowa', 'Gdańsk Powstańców Warszawskich'],
    datasets: [
      {
        id: 'CO',
        label: 'Poziom CO (mg/m^3)',
        data: [0.51, 0.47, 0.63, 0.52, 0.49, 0.67, 0.55],
        backgroundColor: [
          'rgba(255, 134,159,0.8)',
        ],
      },
      {
        id: 'NO2',
        label: 'Poziom NO2 (mg/m^3)',
        data: [0.113, 0.12, 0.18, 0.13, 0.16, 0.09, 0.1],
        backgroundColor: [
          'rgba(98,  182, 239,0.8)',
        ],
      },
      {
        id: 'PM10',
        label: 'Poziom PM10 (mg/m^3)',
        data: [0.73, 0.45, 0.32, 0.57, 0.28, 0.62, 0.24 ],
        backgroundColor: [
          'rgba(255, 218, 128,0.8)',
        ],
      }
    ],
  };
