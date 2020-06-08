import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  form = new FormGroup({});
  // tslint:disable-next-line: member-ordering
  model: any = {};
  // tslint:disable-next-line: member-ordering
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  // tslint:disable-next-line: member-ordering
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
