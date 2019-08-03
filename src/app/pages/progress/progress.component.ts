import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresAzul: number = 20;
  progresAmar: number = 65;

  constructor() { }
  ngOnInit() {
  }
}
