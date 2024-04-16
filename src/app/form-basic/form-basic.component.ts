import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrl: './form-basic.component.css',
})
export class FormBasicComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   userQuestion: {
    //     secret: 'pet',
    //     questionAnswer: '',
    //   },
    //   gender: 'male',
    // });
    console.log('clicked');
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log('submitted', form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.userName = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.userQuestion.secret;
    this.user.answer = this.signUpForm.value.userQuestion.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    console.log('submitted', this.user);
    this.signUpForm.reset();
  }
}
