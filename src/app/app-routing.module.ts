import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'agricultura',
    loadChildren: () => import('./agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  },
  {
    path: 'relatorios-clinica',
    loadChildren: () => import('./financeiro/relatorios-clinica/relatorios-clinica.module').then( m => m.RelatoriosClinicaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
