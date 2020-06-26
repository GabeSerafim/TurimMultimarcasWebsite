import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Carro} from '../shared/carro';
import { CarrosService } from '../shared/carros.service';
import { Observable } from 'rxjs';
// import {Platform} from '../shared/platform';
// import {getAllPlatforms} from '../store/platforms.reducers';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.css']
})
export class CarroDetailComponent implements OnInit {
  title = 'Carro Details';
  carro: Observable<Carro>;
  // platforms: Observable<Platform[]>;

  constructor(private route: ActivatedRoute,private carroservice: CarrosService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.store.dispatch(new GetCarro(+params.id));
      this.carro = this.carroservice.findById(params.id);
      
    });
    // this.carro = this.store.select(getCarro);
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
