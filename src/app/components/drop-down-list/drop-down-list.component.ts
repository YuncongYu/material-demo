import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent {
  isChecked = true;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Mercedes' },
    { id: 4, name: 'Audi' },
  ]
  selectedCar = '';

  constructor() { }

}
