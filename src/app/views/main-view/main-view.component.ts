import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
})
export class MainViewComponent implements OnInit {
  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });

    this.parentForm.valueChanges.subscribe(newVal => {
      console.log(newVal);
    });
  }
}
