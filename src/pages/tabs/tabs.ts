import { Component } from '@angular/core';
import { RotasPage } from '../rotas/rotas';
import { PrevisaoPage } from '../previsao/previsao';
import { MapPage } from '../map/map';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RotasPage;
  tab2Root = PrevisaoPage;
  tab3Root = MapPage;

  constructor() {

  }
}
