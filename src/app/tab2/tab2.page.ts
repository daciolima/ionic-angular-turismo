import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AgendamentoService } from '../api/agendamento.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  handlerMessage = '';
  roleMessage = '';

  public agendamentos: any;

  constructor(
    public toastController: ToastController, private agendamentosService: AgendamentoService
  ) {}


  ngOnInit() {

    // subscribe inscreve o método no servico
    this.agendamentosService.getAgendamento().subscribe(
      // Success
      (value: any) => this.agendamentos = value['results'],
      
      // Error
      (e: any) => console.log(e)
    )
  }






  // openSite(urlSite: string) {
  //   window.open(urlSite)
  // }

  async chooseOption(param: number, position: 'bottom') {
    const toast = await this.toastController.create({
      message: '',
      //duration: 3000,
      buttons: [
        {
          text: 'Iniciar Consulta',
          role: 'info',
          handler: () => {
            this.sendEmail(param, position)
          },
        },
        {
          text: 'Detalhes do agendamento',
          role: 'info',
          handler: () => {
            this.like(position)
          },
        },
        {
          text: 'Fecha',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Dismiss clicked';
          },
        },
      ],
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }


  async sendEmail(param: number, position: 'bottom') {
    const toast = await this.toastController.create({
      message: `Enviado relatório ${param}`,
      duration: 2000,
      position: position,
    });
    await toast.present();
  }
  
  async like(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Obrigado por curtir!',
      duration: 2000,
      position: position,
    });
    await toast.present();

  }
}
