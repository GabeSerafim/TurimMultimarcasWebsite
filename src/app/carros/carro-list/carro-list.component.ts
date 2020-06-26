import {Component, OnInit, Sanitizer} from '@angular/core';
import {Carro} from '../shared/carro';
import {Observable} from 'rxjs';
import { CarrosService } from '../shared/carros.service';
import { DomSanitizer } from '@angular/platform-browser';
// import {PlatformsService} from '../shared/platforms.service';
// import {Platform} from '../shared/platform';
// import {getAllPlatforms} from '../store/platforms.reducers';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {
  title = 'Carros';
  carros: Carro[] = [];

  constructor(private carroservice: CarrosService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() { 
    this.carroservice.findAll().subscribe(data =>{
      this.carros = Array.from(data);
    })
  }

  getImage(carro){
    if(carro.image){
      console.log(carro.image);
        let objectURL = 'data:image/jpeg;base64,' + new Blob([new Uint8Array(carro.image)]);
        return this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }else{
      return "http://localhost:4200/assets/images/not-available.png"
    }
  }

  /**
   * Delete the selected hero
   */
  delete(id: number) {
    if (confirm('Você tem certeza que deseja excluir esse anúncio?')) {
      // this.store.dispatch(new carroActions.RemoveCarro(id));
      this.carroservice.delete(id).subscribe();
    }
  }
}
