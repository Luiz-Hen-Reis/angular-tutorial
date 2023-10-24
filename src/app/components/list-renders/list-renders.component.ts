import { Component } from '@angular/core';

@Component({
  selector: 'app-list-renders',
  templateUrl: './list-renders.component.html',
  styleUrls: ['./list-renders.component.css'],
})
export class ListRendersComponent {
  users = [
    { name: 'Lucas', dogs: 'Sim' },
    { name: 'Juliana', dogs: 'Não' },
    { name: 'Isaac', dogs: 'Sim' },
    { name: 'Leonardo', dogs: 'Não' },
  ];
}
