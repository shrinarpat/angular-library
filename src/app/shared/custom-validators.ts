import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

//* Create a factory validator for forbiddenValue
export function forbiddenValueValidator(valueRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = valueRe.test(control.value);
    return forbidden ? { forbiddenValue: control.value } : null;
  };
}

//*  Pincode validator
export const PincodeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const validPincodeLen = 6;
  if (control.value.length === validPincodeLen && !isNaN(+control.value)) {
    return null;
  } else {
    return { pincode: control.value };
  }
};

//* function uniqueFirstnameLastnameValidator()
export const uniqueFirstnameLastnameValidator: ValidatorFn = (
  controls: AbstractControl
): ValidationErrors | null => {
  return controls.get('firstname')?.value === controls.get('lastname')?.value
    ? { uniqueFirstnameLastname: true }
    : null;
};
