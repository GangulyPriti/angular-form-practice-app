import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { AssignmentSixComponent } from './assignment-six/assignment-six.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AssignmentSevenComponent } from './assignment-seven/assignment-seven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBasicComponent,
    AssignmentSixComponent,
    FormReactiveComponent,
    AssignmentSevenComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
