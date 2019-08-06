import { NgModule } from '@angular/core';



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
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    AccountSettingsComponent

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
  ]
})
export class PagesModule { }
