import { NgModule } from '@angular/core';

// npm i --save ng2-charts ---- npm install --save chart.js
//dowgrade npm install ng2-charts@2.2.3
import { ChartsModule } from 'ng2-charts';

//imports Modules
import { ComponentsModule } from '../components/components.module'
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routes';
import { ShareModule } from '../shared/share.module'

//Modulos Pages
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent

  ],
  exports: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    PagesRoutes,
    ComponentsModule,
    ChartsModule
  ]
})
export class PagesModule { }
