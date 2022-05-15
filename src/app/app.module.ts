import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ComponentTemplateComponent } from './components/component-template/component-template.component';
import { InputComponent } from './components/input/input.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from '@angular/router';
import { ComponentListService } from "./services/component-list.service";
import { MatInputModule } from "@angular/material/input";
import { TextareaComponent } from './components/textarea/textarea.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DatePickersComponent } from './components/date-pickers/date-pickers.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DropDownListComponent,
    ComponentTemplateComponent,
    InputComponent,
    SidebarComponent,
    ContentComponent,
    TextareaComponent,
    DatePickersComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [ComponentListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
