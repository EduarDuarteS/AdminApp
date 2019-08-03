import { NgModule } from '@angular/core';

//Modulos
import { IncrementadorComponent } from './incrementador/incrementador.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    IncrementadorComponent,

  ],
  imports: [
    FormsModule
  ],
  exports: [
    IncrementadorComponent
  ]
})
export class ComponentsModule { };
