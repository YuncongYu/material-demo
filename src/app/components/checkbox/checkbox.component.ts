import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  isSubscribed = false;
  isShowDetailsChecked = true;

  constructor() { }

  onChange($event: MatCheckboxChange) {
    console.log($event)
  }


}
