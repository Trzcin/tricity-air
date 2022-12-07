import type { IBubbleMapDataPoint } from 'chartjs-chart-geo'

export const map_data: {labels: string[], datasets: {id: string, label: string, backgroundColor: string[], data: IBubbleMapDataPoint[]}[]} = {
    labels: ['Gdynia Porębskiego', 'Gdynia Szafranowa'],
    datasets: [
      {
        id: 'CO',
        label: 'Poziom CO (mg/m^3)',
        data: [
            {
                latitude: 54.560836,
                longitude: 18.493331,
                value: 10
            },
            {
                latitude: 54.465758,
                longitude: 18.464911,
                value: 50
            }
        ],
        backgroundColor: [
          'rgba(255, 134,159,0.8)',
        ],
      },
    ],
  };
