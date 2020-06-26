import {Component, OnInit} from '@angular/core';
import {Carro} from '../shared/carro';
// import {Platform} from '../shared/platform';
// import {PlatformsService} from '../shared/platforms.service';
import {Router} from '@angular/router';
import { CarrosService } from '../shared/carros.service';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css']
})
export class CarroCreateComponent implements OnInit {
  title = 'Create new carro';
  carro: Carro = new Carro();
  imageFile: File;

  constructor(private router: Router,
    private carroService: CarrosService) {

  }

  ngOnInit() {
  }

  /**
   * If user is in view mode, back to edit mode else go to carros page
   */
  onBack() {
    this.router.navigate(['/carros']);
  }

  processFile(event){
    this.imageFile = event.target.files[0];
  }

  /**
   * Create a new hero
   */
  onSaveCarro() {
    // this.store.dispatch(new AddCarro(this.carro));
    this.carroService.insert(this.carro).subscribe(
      data => {
        if(data){
          this.createImage(data.id)
          alert("Carro criado com sucesso")
          //this.reset()
        }
      },err=>alert('Ocorreu um erro, revise as informações e tente novamente')
    )
  }
  createImage(id: number) {
    saveAs(this.imageFile,id+"foto");
  }

  reset() {
    this.carro.id = null;
    this.carro.titulo = '';
    this.carro.descricao = '';
    this.carro.placaDoCarro = '';
    this.carro.marca = '';
    this.carro.modelo = '';
    this.carro.anoDoModelo = '';
    this.carro.versao = '';
    this.carro.cambio = '';
    this.carro.combustivel = '';
    this.carro.direcao = '';
    this.carro.potenciaDoMotor = '';
    this.carro.tipoDeVeiculo = '';
    this.carro.quilometragem = null;
    this.carro.portas = null;
    this.carro.finalDaPlaca = null;
    this.carro.cor = '';
    this.carro.airBag = false;
    this.carro.alarme = false;
    this.carro.arCondicionado = false;
    this.carro.travaEletrica = false;
    this.carro.vidroEletrico = false;
    this.carro.som = false;
    this.carro.sensorRe = false;
    this.carro.cameraRe = false;
    this.carro.blindado = false;
    this.carro.direcaoHidraulica = false;
    this.carro.aceitaTrocas = false;
    this.carro.unicoDono = false;
    this.carro.preco = null;
    this.carro.estadoFinanceiro = [];
    this.carro.cep = null;
  }
}
