import { Component } from '@angular/core';
import { NotasPage } from '../notas/notas';
import { PrevisaoPage } from '../previsao/previsao';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotasPage;
  tab2Root = PrevisaoPage;

  constructor() {

  }
}
