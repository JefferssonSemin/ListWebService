import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceProvider } from "../../providers/webservice/webservice";
import { RotasPage } from '../rotas/rotas';

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
    this.webService.getPrevisao(this.cidade).subscribe((data: PrevisaoInterface) => {
      this.cidade = '';
      this.notaPrevisao.title = 'Previsão do tempo em ' + data.name
      this.notaPrevisao.body = 'Temperatura ' + data.main.temp.toString() + ' graus e '+ data.weather[0].description+'. Em '+this.getData();
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
    this.navCtrl.push(RotasPage, { nota: this.notaPrevisao });
  }
}
