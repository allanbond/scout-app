import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'tsa-new-scout-form',
  templateUrl: './new-scout-form.component.html',
  styleUrls: ['./new-scout-form.component.scss']
})
export class NewScoutFormComponent implements OnInit {
  scoutForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewScoutFormComponent>, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm () {
    this.scoutForm = this.fb.group(
      {
        firstName: '',
        lastName: '',
        dob: null
      }
    )
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.scoutForm.value);
  }
}
