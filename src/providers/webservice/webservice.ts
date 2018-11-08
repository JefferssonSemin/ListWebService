import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  private url: string = 'http://www.deveup.com.br/notas/';
  private headers = new Headers({ 'accept': 'application/json' });
  constructor(public http: HttpClient) {

  }



  addNota(nota: NotaInterface) {
    const a = this.http.post(this.url + 'api/notes/', { Headers: this.headers })
      .toPromise();
    return a.constructor().json;

  }
  getNotas() {
    return this.http.get(this.url + 'api/notes')
      .toPromise();
  }
}
