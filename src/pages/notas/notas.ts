import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { WebserviceProvider } from "../../providers/webservice/webservice";

@Component({
    templateUrl: 'notas.html'
})

export class NotasPage {

    public abreForm: boolean = false;
    public tituloPagina: string = "Notas";
    public nota: NotaInterface = { title: '', body: '' }
    public listaNotas: NotaInterface[];

    constructor(public navCtrl: NavController, public webService: WebserviceProvider) {
    }

    ionViewDidEnter() {
        this.webService.getNotas().subscribe(
            (data: NotaInterface[]) => {
                this.listaNotas = data;
            }
        );
    }

    AbreFormulario() {
        this.abreForm = !this.abreForm;
        if (this.abreForm) {
            this.tituloPagina = "Adicionar nota";
        } else {
            this.tituloPagina = "Notas";
        }
    }

    adicionaNota() {
        this.webService.addNota(this.nota).subscribe(
            (data: NotaInterface[]) => {
                this.listaNotas = data
                console.log(data);
            }
        );
    }
}

