import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})


export class IncrementadorComponent implements OnInit {

  //Solo acepta Numeros entre 0 y 100
  BAR_REGEXP: RegExp = /^[0-9][0-9]?$|^100$/;

  @Input() titulo: string = "Incrementador";
  @Input() progreso: number = 30;

  @Output() control: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  elem: any = document.getElementsByTagName("valIng")[0].value();

  cambiarVal(val: number) {
    console.log(this.elem);
    this.progreso = Number.parseInt(this.progreso);
    if (this.progreso > 100)
      this.progreso = 100
    if (this.progreso < 0)
      this.progreso = 0
    if ((this.progreso >= 0 && val > 0 && this.progreso !== 100) ||
      (this.progreso <= 100 && val < 0 && this.progreso !== 0)) {
      this.control.emit(this.progreso += val);
      this.progreso = val;
    }
  }
  ngMoChange(event: string) {
    console.log(this.elem);
    let ent: number = parseInt(event);
    if (!Number.isNaN(ent)) {
      if (ent > 100)
        event = "" + 100;
      if (ent < 0)
        event = "" + 0;
      if (this.BAR_REGEXP.test(event)) {
        this.progreso = ent;
        this.control.emit(ent);
        return;
      }
    }
    this.progreso = 40;
    this.control.emit(40);
  }
}
