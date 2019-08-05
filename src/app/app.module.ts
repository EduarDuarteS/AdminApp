import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modulos
import { PagesModule } from "./pages/pages.module";
import { ShareModule } from "./shared/share.module";
import { ComponentsModule } from "./components/components.module"

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { RegisterComponent } from './login/register.component';

// Rutas
import { APP_ROUTES } from "./app-routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ShareModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
