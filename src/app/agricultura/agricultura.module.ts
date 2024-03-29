import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriculturaPageRoutingModule } from './agricultura-routing.module';

import { AgriculturaPage } from './agricultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriculturaPageRoutingModule
  ],
  declarations: [AgriculturaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgriculturaPageModule {}
