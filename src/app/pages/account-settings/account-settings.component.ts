import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [`
    a {
        cursor: pointer;
      }
  `]
})

@Injectable()
export class AccountSettingsComponent {
  themeTag: HTMLElement;
  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.themeTag = this._document.getElementById('theme');
  }

  changeTheme(theme: string, ref) {
    let url = `assets/css/colors/${theme}.css`;
    this.themeTag.setAttribute("href", url);
    // let themeName=`${theme}-theme`
    this.cleanCheck();

    //usando referencia #
    ref.classList.add('working');

    //sin referencia
    // this._document.getElementsByClassName(theme + "-theme")[0].classList.add("working");
  }

  // Se puede realizar con jQuery o con JavaScript
  //Recorre los elementos con de la clase selector y les elmina la clase "working"
  cleanCheck() {
    let selecHTMLElm = this._document.getElementsByClassName('selector');
    // let selecHTMLElm = this._document.querySelectorAll('.selector');

    for (const elem of selecHTMLElm as any) {
      elem.classList.remove("working");
    }
  }

  ngOnInit() {
  }

}
