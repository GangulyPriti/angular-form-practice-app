import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrl: './assignment-seven.component.css',
})
export class AssignmentSevenComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  projectform: FormGroup;
  forbiddenName = 'Test';
  ChangedStatus = 'INVALID';
  constructor() {
    this.projectform = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.validateName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectstatus: new FormControl('Critical'),
    });
  }
  ngOnInit(): void {
    // this.projectform = new FormGroup({
    //   projectname: new FormControl(
    //     null,
    //     [Validators.required, this.forbiddenNames.bind(this)],
    //     this.validateName
    //   ),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   projectstatus: new FormControl('Critical'),
    // });
    this.projectform.statusChanges.subscribe((status) => {
      console.log(status);
      this.ChangedStatus = status;
    });
  }
  onSubmitForm() {
    setTimeout(
      () => console.log(' before If Form Submitted', this.projectform.value),
      0
    );

    if (this.ChangedStatus === 'VALID') {
      const obj = this.projectform.value;
      console.log('After validation Form Submitted', obj);
      this.projectform.reset();
    }
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenName === control.value) {
      return { nameIsForbidden: true };
    }
    return null;
  }
  validateName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ valueIsReplaced: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
