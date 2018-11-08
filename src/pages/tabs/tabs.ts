import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NotasPage } from '../notas/notas';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotasPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
