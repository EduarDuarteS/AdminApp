import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit() {
    console.log(this.data);
    // Doughnut
    this.doughnutChartData = this.data.data;
    this.doughnutChartLabels = this.data.labels;
    this.doughnutChartType = this.data.type;
  }
  /*
  {grafico1: {…}, grafico2: {…}, grafico3: {…}, grafico4: {…}}
  grafico1:
  data: (3) [24, 30, 46]
  labels: (3) ["Con Frijoles", "Con Natilla", "Con tocino"]
  leyenda: "El pan se come con"
  type: "doughnut"
  */

  // Doughnut
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  //   // [50, 150, 120],
  //   // [250, 130, 70],
  // ];
  // public doughnutChartType: ChartType = 'doughnut';


}
