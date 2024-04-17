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
  ngOnInit(): void {
    this.projectform = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.validateName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectstatus: new FormControl('Critical'),
    });
    this.projectform.statusChanges.subscribe((status) => {
      console.log(status);
      this.ChangedStatus = status;
    });
  }
  onSubmitForm() {
    console.log('Form Submitted', this.projectform);

    if (this.ChangedStatus === 'VALID') {
      // this.projectform.reset();
      console.log('Form Submitted', this.projectform);
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
