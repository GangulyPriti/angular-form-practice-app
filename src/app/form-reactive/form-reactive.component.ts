import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsername = ['chris', 'anna'];
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userdata: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signUpForm.setValue({
      userdata: {
        username: 'Max',
        email: 'abc@abc.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      userdata: {
        username: 'anna',
        email: 'abc@abc.com',
      },
      gender: 'male',
      hobbies: [],
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
