import { Component, Injectable, Type } from '@angular/core';
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { RadioButtonComponent } from "../components/radio-button/radio-button.component";
import { DropDownListComponent } from "../components/drop-down-list/drop-down-list.component";


@Injectable({
  providedIn: 'root'
})
export class ComponentListService {
  getComponents() {
    return [
      { id: 1, name: 'Checkbox', templateId: 'checkbox', component: <Component>CheckboxComponent },
      { id: 2, name: 'Radio Button', templateId: 'radio-button', component: <Component>RadioButtonComponent },
      { id: 3, name: 'Drop-down List', templateId: 'drop-down-list', component: <Component>DropDownListComponent }
    ]
  }
}