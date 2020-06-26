import {Component, OnInit} from '@angular/core';
import {Carro} from '../shared/carro';
import {ActivatedRoute, Router} from '@angular/router';
import { CarrosService } from '../shared/carros.service';
import { Observable } from 'rxjs';
// import {Platform} from '../shared/platform';
// import {getAllPlatforms} from '../store/platforms.reducers';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.css']
})
export class CarroEditComponent implements OnInit {
  title = 'Carro Edition';
  carroObs: Observable<Carro>;
  carro: Carro;
  // platforms: Platform[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carroservice: CarrosService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.store.dispatch(new GetCarro(+params.id));
      this.carroObs = this.carroservice.findById(params.id);
    }).unsubscribe();
    this.carroObs.subscribe(data =>{
      this.carro=data;
    })
  }

  /**
   * Create a new carro
   */
  onSaveCarro() {
    // this.store.dispatch(new UpdateCarro(this.carro));
    console.log(this.carro);
    this.carroservice.update(this.carro).subscribe(data =>{
      this.carro = data
    })
  }

  /**
   * If user is in view mode, back to edit mode else go to carros page
   */
  onBack() {
    this.router.navigate(['/carros']);
  }

  /**
   * Reset all fields in the form
   */
  reset() {
    var carro;
    carro.id = null;
    carro.titulo = '';
    carro.descricao = '';
    carro.placaDoCarro = '';
    carro.marca = '';
    carro.modelo = '';
    carro.anoDoModelo = '';
    carro.versao = '';
    carro.cambio = '';
    carro.combustivel = '';
    carro.direcao = '';
    carro.potenciaDoMotor = '';
    carro.tipoDeVeiculo = '';
    carro.quilometragem = null;
    carro.portas = null;
    carro.finalDaPlaca = null;
    carro.cor = '';
    carro.airBag = false;
    carro.alarme = false;
    carro.arCondicionado = false;
    carro.travaEletrica = false;
    carro.vidroEletrico = false;
    carro.som = false;
    carro.sensorRe = false;
    carro.cameraRe = false;
    carro.blindado = false;
    carro.direcaoHidraulica = false;
    carro.aceitaTrocas = false;
    carro.unicoDono = false;
    carro.preco = null;
    carro.image = '';
    carro.estadoFinanceiro = [];
    carro.cep = null;
    this.carro = carro;
  }

  /**
   * Delete the selected hero
   */
  delete(id: number) {
    if (confirm('Você tem certeza que deseja excluir esse anúncio?')) {
      // this.store.dispatch(new carroActions.RemoveCarro(id));
      this.carroservice.delete(id).subscribe()
    }
  }

}
