import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatoriosClinicaPage } from './relatorios-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatoriosClinicaPageRoutingModule {}
