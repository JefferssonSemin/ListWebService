import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { WebserviceProvider } from "../../providers/webservice/webservice";


@Component({
    templateUrl: 'notas.html'
})

export class NotasPage {

    public abreForm: boolean = false;
    public tituloPagina: string = "Notas";
    public nota: NotaInterface = { Title: '', Body: '' }
    public listaNotas: NotaInterface[];

    constructor(public navCtrl: NavController, public webService: WebserviceProvider) {


    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        this.webService.getNotas().then(a => this.listaNotas = a);
        
    }

    AbreFormulario() {
        this.abreForm = !this.abreForm;
        if (this.abreForm) {
            this.tituloPagina = "Adicionar nota";
        } else {
            this.tituloPagina = "Notas";
        }
    }

    // adicionaNota() {
    //     console.log(this.nota);
    //     let nota = this.nota;
    //     this.nota =  {Title: '', Body: '' }
    //     this.abreForm = false;
    //     this.webService.addNota(this.nota).then(data => console.log(data));
    //     this.webService.addNota(this.nota).then(data =>  this.listaNotas.push(data));
       
    // }
}
