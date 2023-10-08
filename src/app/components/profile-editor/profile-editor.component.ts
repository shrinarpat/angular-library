import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  forbiddenValueValidator,
  PincodeValidator,
  uniqueFirstnameLastnameValidator,
} from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent implements OnInit {
  titleError: string[] = [];
  profileForm: FormGroup = this.fb.group(
    {
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          forbiddenValueValidator(/abc/i), // sync custom-validator
        ],
      ],
      lastname: [''],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: [''],
        zip: ['', [Validators.required, PincodeValidator]],
      }),
      // aliases: this.fb.array([this.fb.control('')]),
    },
    {
      validators: uniqueFirstnameLastnameValidator,
    }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.firstname?.valueChanges.subscribe((val) => {
      console.log(this.firstname?.errors);
      this.titleError = [];
      this.requiredErrorMessage(this.firstname as FormControl, this.titleError);
      this.minlengthErrorMessage(
        this.firstname as FormControl,
        this.titleError
      );
      if (this.firstname?.errors?.['forbiddenValue']) {
        this.titleError.push(
          `${this.firstname.errors?.['forbiddenValue']} as value not allowed`
        );
      }
    });
  }

  get firstname() {
    return this.profileForm.get('firstname');
  }

  get address() {
    return this.profileForm.get('address') as FormGroup;
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  updateForm(): void {
    this.profileForm.patchValue({
      firstname: 'Narpat Singh',
      address: {
        street: 'Rooppura',
      },
    });
  }

  requiredErrorMessage(control: AbstractControl, errorMessage: string[]): void {
    const condition =
      control.errors &&
      control.errors?.['required'] &&
      (control.touched || control.dirty);

    if (condition) {
      errorMessage.push('This is a required field');
    }

    // return errorMessage;
  }

  minlengthErrorMessage(
    control: AbstractControl,
    errorMessage: string[]
  ): void {
    const condition =
      control.errors &&
      control.errors?.['minlength'] &&
      (control.touched || control.dirty);

    if (condition) {
      errorMessage.push(
        `Value must have atleast ${control.errors?.['minlength'].requiredLength} characters`
      );
    }
    // return errorMessage;
  }
}
