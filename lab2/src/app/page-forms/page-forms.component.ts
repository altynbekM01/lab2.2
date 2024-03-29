import {Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-forms',
  templateUrl: './page-forms.component.html',
  styleUrls: ['./page-forms.component.css']
})
export class PageFormsComponent implements OnInit {

  usersForm: FormArray;

  username = '';



  constructor(private activatedRoute: ActivatedRoute) {
    // this.username = this.activatedRoute.snapshot.queryParams['username'];
    this.username = this.activatedRoute.snapshot.paramMap.get('username') || '';

    this.usersForm = new FormArray([
      this.createNewFormGroup(),
    ]);
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.usersForm);
  }

  addUserFormGroup() {
    this.usersForm.push(this.createNewFormGroup());
  }

  usernameCtrl(formGroup: FormGroup, ctrlName: string): any {
    return <FormGroup>formGroup.get(ctrlName)?.errors;
  }

  get getFormControls(): FormGroup[] {
    return <FormGroup[]>this.usersForm.controls;
  }

  private createNewFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl(this.username || '', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required]),
      fullName: new FormControl(''),
      country: new FormControl(''),
    });
  }

  deleteFormGroup(index: number) {
    this.usersForm.removeAt(index);
  }
}
