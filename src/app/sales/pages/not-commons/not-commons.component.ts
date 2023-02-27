import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html'
})
export class NotCommonsComponent {
  
  // i18nSelect
  name: string = 'Susana';
  gender: string = 'femenino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan'];
  clientsMap = {
    '=0': '0 clientes esperando.',
    '=1': '1 cliente esperando.',
    'other': '# clientes esperando.'
  }

  changeClient() {
    this.name = 'Pedro';
    this.gender = 'masculino';
  }

  deleteClient() {
    this.clients.pop();
  }
}