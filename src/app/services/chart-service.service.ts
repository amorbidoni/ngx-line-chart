import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartServiceService {
  private multi = [
    {
      name: 'Temperatura',
      visible: true,
      color: '#5AA454',
      series: [
        {
          name: '15:10',
          value: -20,
        },
        {
          name: '15:20',
          value: -18,
        },
        {
          name: '15:30',
          value: -15,
        },
      ],
    },

    {
      name: 'Presión mínima',
      visible: true,
      color: '#E44D25',
      series: [
        {
          name: '15:10',
          value: -10,
        },
        {
          name: '15:20',
          value: -10,
        },
        {
          name: '15:30',
          value: -10,
        },
      ],
    },

    {
      name: 'Presión máxima',
      visible: true,
      color: 'blue',
      series: [
        {
          name: '15:10',
          value: 5,
        },
        {
          name: '15:20',
          value: 5,
        },
        {
          name: '15:30',
          value: 5,
        },
      ],
    },
  ];
  constructor() {}
  getDataChart() {
    return this.multi;
  }
  get dataChart() {
    return this.multi;
  }
}
