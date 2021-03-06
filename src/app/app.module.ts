import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modulos
import { PagesModule } from "./pages/pages.module";
import { ShareModule } from "./shared/share.module";
import { ComponentsModule } from "./components/components.module"

import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

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
