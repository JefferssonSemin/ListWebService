import { Component } from "@angular/core";
import { NavController, ItemSliding, NavParams } from "ionic-angular";
import { WebserviceProvider } from "../../providers/webservice/webservice";
import { DetalhesPage } from "../detalhes/detalhes";

@Component({
    templateUrl: 'notas.html'
})

export class NotasPage {

    public abreForm: boolean = false;
    public tituloPagina: string = "Notas";
    public nota: NotaInterface = { title: '', body: '' }
    public listaNotas: NotaInterface[];
    public editando: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebserviceProvider) {
    }

    ionViewDidEnter() {
        this.webService.getNotas().subscribe(
            (data: NotaInterface[]) => {
                this.listaNotas = data;
            }
        );
        if (this.navParams.get('nota')) {
           this.AbreFormulario();
            this.nota = this.navParams.get('nota');
        }
    }

    AbreFormulario() {
        this.abreForm = !this.abreForm;
        this.nota = { title: '', body: '' };
        this.editando = false;
        if (this.abreForm) {
            this.tituloPagina = "Adicionar nota";
        } else {
            this.tituloPagina = "Notas";
        }
    }

    adicionaNota() {
        this.webService.addNota(this.nota).then(data => console.log(data));
    }

    abreDetalhe(nota: NotaInterface) {
        this.navCtrl.push(DetalhesPage, { nota: nota });
    }

    abreEditarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        this.editando = true;
        listaopcoes.close();
        this.abreForm = true;
        this.tituloPagina = "Editar nota"
        this.nota = nota;
    }
    editarNota() {
        //this.webService.editNota(this.nota).then(data=> this.atualizaNota(data));
    }

    atualizaNota(nota: NotaInterface) {
        this.abreForm = false;
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].id == nota.id) {
                this.listaNotas[k] = nota;
            }
        }
    }

    deletarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        listaopcoes.close();
        //this.webService.deleteNota(nota).then(data => this.RemoveNota(data));

    }

    RemoveNota(nota: NotaInterface) {
        this.abreForm = false;
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].id == nota.id) {
                this.listaNotas.splice[parseInt(k), 1] = nota;
            }
        }
    }

}

