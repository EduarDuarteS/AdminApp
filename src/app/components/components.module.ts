import { NgModule } from '@angular/core';

//Modulos
import { IncrementadorComponent } from './incrementador/incrementador.component'
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component'

// npm i --save ng2-charts ---- npm install --save chart.js
//dowgrade npm install ng2-charts@2.2.3
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficoDonaComponent,

  ],
  imports: [
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    GraficoDonaComponent
  ]
})
export class ComponentsModule { };
