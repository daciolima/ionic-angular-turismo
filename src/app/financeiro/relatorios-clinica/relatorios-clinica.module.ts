import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatoriosClinicaPageRoutingModule } from './relatorios-clinica-routing.module';

import { RelatoriosClinicaPage } from './relatorios-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatoriosClinicaPageRoutingModule
  ],
  declarations: [RelatoriosClinicaPage]
})
export class RelatoriosClinicaPageModule {}
