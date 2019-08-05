import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})


export class IncrementadorComponent implements OnInit {

  //Solo acepta Numeros entre 0 y 100
  BAR_REGEXP: RegExp = /^[0-9][0-9]?$|^100$/;
  //cambia los valores que no sean numericos
  REMP_NONUM: RegExp = /[^0-9.]/g;

  @Input() titulo: string = "Incrementador";
  @Input() progreso: number = 30;

  @Output() control: EventEmitter<number> = new EventEmitter();
  @ViewChild('viewChildtag') viewChildtag: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  cambiarVal(val: number) {
    // this.progreso = Number.parseInt((''+this.progreso).replace(/[^0-9.]/g, ''));
    if (this.progreso > 95)
      this.progreso = 100;
    else if (this.progreso < 5)
      this.progreso = 0
    if ((this.progreso >= 0 && val > 0 && this.progreso !== 100) ||
      (this.progreso <= 100 && val < 0 && this.progreso !== 0))
      this.control.emit(this.progreso += val);
    this.control.emit(this.progreso);
    this.viewChildtag.nativeElement.focus();
  }

  ngMoChange(event: string) {
    // this.BAR_REGEXP.test(event); //realizar test con RegExp
    event = event.replace(/[^0-9.]/g, '');
    let ent: number = parseInt(event);
    if (ent > 100) {
      ent = 100;
    }
    else if (ent < 0) {
      ent = 0;
    }
    this.progreso = ent;
    this.viewChildtag.nativeElement.value = ent;
    this.viewChildtag.nativeElement.focus();
    this.control.emit(ent);

  }
}
