import { Component, OnInit } from '@angular/core';

import { SignUpModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  signup!: SignUpModel;

  constructor() {}

  ngOnInit(): void {
    this.signup = new SignUpModel();
  }

  handleFormOne() {
    console.log('handleFormOne');

    console.log(this.signup);

    // Reset the form values
    // form.resetForm();
  }
}
