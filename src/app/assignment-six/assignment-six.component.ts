import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrl: './assignment-six.component.css',
})
export class AssignmentSixComponent {
  @ViewChild('f') signUpForm: NgForm;
  showWarning = false;
  subscription = 'advance';
  onSubmit() {
    console.log('Submitted', this.signUpForm.valid);
    if (!this.signUpForm.valid) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
      console.log(this.signUpForm.value);
      this.signUpForm.reset();
    }
  }
}
