import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestListService {
  constructor() {}

  consoleService() {
    console.log('Serviço iniciado 1');
    console.log('Serviço iniciado 2');
    console.log('Serviço iniciado 3');
  }

  alertService() {
    alert('Serviço iniciado!');
  }
}
