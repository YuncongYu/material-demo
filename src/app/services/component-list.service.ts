import { Component, Injectable } from '@angular/core';
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { RadioButtonComponent } from "../components/radio-button/radio-button.component";
import { DropDownListComponent } from "../components/drop-down-list/drop-down-list.component";
import { InputComponent } from "../components/input/input.component";
import { TextareaComponent } from "../components/textarea/textarea.component";
import { DatePickersComponent } from "../components/date-pickers/date-pickers.component";


@Injectable({
  providedIn: 'root'
})
export class ComponentListService {
  getComponents() {
    return [
      {
        id: 1,
        name: 'Checkbox',
        templateId: 'checkbox',
        component: <Component>CheckboxComponent,
        icon: 'bi bi-check2-square'
      },
      {
        id: 2,
        name: 'Radio Button',
        templateId: 'radio-button',
        component: <Component>RadioButtonComponent,
        icon: 'bi bi-ui-radios'
      },
      {
        id: 3,
        name: 'Drop-down List',
        templateId: 'drop-down-list',
        component: <Component>DropDownListComponent,
        icon: 'bi bi-menu-button'
      },
      {
        id: 4,
        name: 'Input',
        templateId: 'Input',
        component: <Component>InputComponent,
        icon: 'bi bi-input-cursor-text'
      },
      {
        id: 5,
        name: "Textarea",
        templateId: "Textarea",
        component: <Component>TextareaComponent,
        icon: "bi bi-textarea-resize"
      },
      {
        id: 6,
        name: "Date Pickers",
        templateId: "data-pickers",
        component: <Component>DatePickersComponent,
        icon: "bi bi-calendar-date"
      }
    ]
  }
}
