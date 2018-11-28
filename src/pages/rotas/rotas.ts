import { Component } from "@angular/core";
import { NavController, ItemSliding, NavParams } from "ionic-angular";
import { WebserviceProvider } from "../../providers/webservice/webservice";
import { DetalhesPage } from "../detalhes/detalhes";

@Component({
    templateUrl: 'rotas.html'
})

export class RotasPage {

    public abreForm: boolean = false;
    public tituloPagina: string = "Listagem de rotas";
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

    adicionaNota() {
        this.webService.addNota(this.nota).subscribe(data => this.atualizaNota(this.nota));
    }

    editarNota() {
        this.webService.editNota(this.nota).subscribe(data => this.atualizaNota(this.nota));
    }

    deletarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        this.removeNota(nota);
        listaopcoes.close();
        this.webService.deleteNota(nota).subscribe(data => console.log(data));
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

    abreDetalhe(nota: NotaInterface) {
        this.navCtrl.push(DetalhesPage, { nota: nota });}

    abreEditarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        this.editando = true;
        listaopcoes.close();
        this.abreForm = true;
        this.tituloPagina = "Editar nota"
        this.nota = nota;
    }

    atualizaNota(nota: NotaInterface) {
        this.abreForm = false;
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].id == nota.id) {
                this.listaNotas[k] = nota;
            }
        }
    }

    removeNota(nota: NotaInterface) {
        this.abreForm = false;
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].id == nota.id) {
                this.listaNotas.splice[parseInt(k), 1] = nota;
            }
        }
    }

}

