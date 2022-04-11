import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  imageUrl = './assets/contacts.jfif';
  constructor() { }

  ngOnInit(): void {
  }

}
