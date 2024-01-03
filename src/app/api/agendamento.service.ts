import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private URL: string = "https://randomuser.me/api/?results=10"

  constructor(private httpClient: HttpClient) { }

  getAgendamento(): any {
    let resp: any =  this.httpClient.get(this.URL)
    return resp
  }
}
