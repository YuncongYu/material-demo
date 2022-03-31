import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  gender = "female";
  nativeValue = "";
  genderFormNativeReactive = new FormGroup({
    gender: new FormControl('female', Validators.required)
  })

  constructor() {
  }

  onGenderFormNativeTemplateSubmit(genderFormNative: NgForm) {
    this.gender = genderFormNative.controls['gender-native'].value;
  }

  onGenderFormNativeReactiveSubmit() {
    // console.log(this.genderFormNativeReactive.get('gender')?.value);
    this.gender = this.genderFormNativeReactive.get('gender')?.value;
  }
}
