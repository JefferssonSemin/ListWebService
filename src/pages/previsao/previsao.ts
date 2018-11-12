import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceProvider } from "../../providers/webservice/webservice";
import { NotasPage } from '../notas/notas';

/**
 * Generated class for the PrevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html',
})
export class PrevisaoPage {
  public cidade: string = 'sao paulo';
  public notaPrevisao: NotaInterface = { title: '', body: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebserviceProvider) {
  }

  ionViewDidLoad() {
    this.buscaPrevisao();
  }

  buscaPrevisao() {
    this.webService.getPrevisao(this.cidade).subscribe((data: NotaInterface[]) => {
      //this.cidade = '';
      // this.notaPrevisao.title = 'Previsão em' + data.push(name)
      // this.notaPrevisao.body = 'Temperatura em ' + data.push()
      console.log(data);
    })
  }

  getData() {
    let data: any = new Date();
    let dd: any = data.getDate();
    let mm: any = data.getMonth() + 1;
    let yyyy: any = data.getFullYear();
    let h: any = data.getHours();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy + ' - ' + h + 'h';
  }

  salvaNota() {
    this.navCtrl.push(NotasPage, {nota: this.notaPrevisao});
  }
}
