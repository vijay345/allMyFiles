import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-custom-input',
  template: `
     <input [type]="type" [formControl]="formControl" [formlyAttributes]="field">
  `,
  styleUrls: ['./formly-field-custom-input.component.css']
})
export class FormlyFieldCustomInputComponent  extends FieldType{

  get type() {
    return this.to.type || 'text';
  }
}
