import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color } from '@swimlane/ngx-charts';

import { ChartServiceService } from './services/chart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  miFormulario: FormGroup = this.fb.group({
    toggleGradient: [],
  });
  view: [number, number] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'tiempo';
  yAxisLabel: string = 'temp';
  timeline: boolean = true;
  domain: string[] = ['#5AA454', '#E44D25', '#7aa3e5'];
  colorScheme: any = {
    domain: this.domain,
  };

  constructor(
    private dataChart: ChartServiceService,
    private fb: FormBuilder
  ) {}
  multi = this.dataChart.dataChart;
  dataChartSelector: any[] = Object.assign([], this.multi);

  listBtns = [
    {
      name: 'Temperatura',
      visible: true,
      colorOn: '#5AA454',
      colorOff: '#666',
    },
    {
      name: 'Presión mínima',
      visible: true,
      colorOn: '#E44D25',
      colorOff: '#666',
    },
    {
      name: 'Presión máxima',
      visible: true,
      colorOn: '#7aa3e5',
      colorOff: '#666',
    },
  ];
  styleBtnsList(i: number) {
    if (this.listBtns[i].visible) {
      return {
        color: this.listBtns[i].colorOn,
      };
    } else {
      return {
        color: this.listBtns[i].colorOff,
      };
    }
  }
  styleIconList(i: number) {
    if (this.listBtns[i].visible) {
      return {
        backgroundColor: this.listBtns[i].colorOn,
      };
    } else {
      return {
        backgroundColor: this.listBtns[i].colorOff,
      };
    }
  }
  onSelect(data: string, i: number): void {
    if (this.listBtns[i].visible) {
      this.multi = this.multi.filter((e) => e.name !== data);
      this.listBtns[i].visible = false;
      this.dataChartSelector[i].visible = false;
      this.addColors(this.multi);
    } else if (this.listBtns[i].visible === false) {
      this.dataChartSelector[i].visible = true;
      this.listBtns[i].visible = true;
      this.multi = this.dataChartSelector.filter((e) => e.visible !== false);
      this.addColors(this.multi);
    }
  }
  addColors(a: any[]) {
    let newDomain = a.map((e) => e.color);
    this.domain = newDomain;
    this.colorScheme = {
      domain: newDomain,
    };
  }
  onActivate(data: string): void {}

  onDeactivate(data: string): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  lineHaiglight: boolean = true;

  addGradient() {
    let elementos = document.querySelectorAll('.line-highlight');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i]?.classList.add('d-block');
    }
  }
  removeGradient() {
    let elementos = document.querySelectorAll('.line-highlight');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i]?.classList.remove('d-block');
    }
  }

  seeGradient() {
    let gradient = this.miFormulario.controls.toggleGradient.value;
    if (gradient) {
      this.addGradient();
    } else {
      this.removeGradient();
    }
  }
}
