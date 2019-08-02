import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos Pages

import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent

  ],
  exports: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
