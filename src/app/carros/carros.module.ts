import {NgModule} from '@angular/core';
import {CarrosService} from './shared/carros.service';
import {carrosRoutedComponents, CarrosRoutingModule} from './carros-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CarrosRoutingModule
  ],
  declarations: [carrosRoutedComponents],
  providers: [
    CarrosService
  ]
})
export class CarrosModule {
}
