import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  imageUrl = './assets/contacts.jfif';

  items: string[] = [];
  name: string | null | undefined = '';
  mynames:any = [];


  items2: string[] = [];

  itemValue: string = '';

  // fullName: string | null | undefined = '';
  nameFromData: string | null | undefined = '';

  addItem2() {
    // if (this.itemValue === '') {
    //   return;
    // }
    // this.dataService.addData(this.itemValue);

    if (this.username === '') {
      return;
    }


    this.dataService.addData(this.username);
    this.mynames.push(this.username)
  }



  ngOnInit(): void {

    this.items = this.dataService.getData();
    // this.name = this.dataService.getFromStorage();
    // this.fullName = this.dataService.getFromStorage();
    this.nameFromData = this.dataService.getFromStorage();
  }

  usersForm: FormArray;

  users: ContactsComponent[] = []

  username = '';




  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    // this.username = this.activatedRoute.snapshot.queryParams['username'];
    this.username = this.activatedRoute.snapshot.paramMap.get('username') || '';

    this.usersForm = new FormArray([
      this.createNewFormGroup(),
    ]);
  }

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

  addItem() {
    if (this.username === '') {
      return;
    }
    this.dataService.addData(this.username);
    // this.mynames.push(this.username)
  }

  // setFullName(data: string) {
  //   this.dataService.fullName = data;
  //   this.dataService.saveToStorage();
  //   // this.fullName = this.dataService.getFromStorage();
  // }




  setUserName(data: string) {
    this.dataService.username = data;
    this.dataService.saveToStorage();
    this.nameFromData = this.dataService.getFromStorage();
  }

}
