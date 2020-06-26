import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
// components
import {CarrosComponent} from './carros.component';
import {CarroListComponent} from './carro-list/carro-list.component';
import {CarroCreateComponent} from './carro-create/carro-create.component';
import {CarroDetailComponent} from './carro-detail/carro-detail.component';
import {CarroEditComponent} from './carro-edit/carro-edit.component';

export const carrosRoutes: Routes = [{
  path: '',
  component: CarrosComponent,
  children: [
    {path: '', component: CarroListComponent},
    {path: 'detail/:id', component: CarroDetailComponent},
    {path: 'create', component: CarroCreateComponent},
    {path: 'edit/:id', component: CarroEditComponent}
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(carrosRoutes)
  ],
  exports: [RouterModule]
})
export class CarrosRoutingModule {
}

export const carrosRoutedComponents = [
  CarrosComponent,
  CarroListComponent,
  CarroDetailComponent,
  CarroCreateComponent,
  CarroEditComponent
];
