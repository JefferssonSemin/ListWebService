import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  private url: string = 'http://www.deveup.com.br/notas/';
  private headers : HttpHeaders;
  constructor(public http: HttpClient) {

  }

  addNota(nota: NotaInterface) {
    return new Promise(resolve => {
      this.http.post(this.url + 'api/notes/' + nota.id, nota ,{headers: this.headers})
        .subscribe(
          response => {
            console.log(nota);
          },
          error => {
            //Failed to Login.
            alert(error.text());
            console.log(error.text());
          });
    });
  }

  getNotas() {
    return this.http.get(this.url + 'api/notes');
  }

  editNota(nota: NotaInterface) {
    return new Promise(resolve => {
      this.http.put(this.url + 'api/notes/' + nota.id, nota)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            //Failed to Login.
            alert(error.text());
            console.log(error.text());
          });
    });
  }

  deleteNota(nota: NotaInterface){
    return new Promise(resolve => {
      this.http.delete(this.url + 'api/notes/' + nota.id, {headers: this.headers})
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            //Failed to Login.
            alert(error.text());
            console.log(error.text());
          });
    });
  }
}
