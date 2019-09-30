import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent implements OnInit {
  @Input() appParentForm: FormGroup;
  @Input() appFormControlName: string;
  @Input() label: string;

  constructor() {}

  ngOnInit() {
    console.log('[Text-Field]: onInit Called!');
  }
}
