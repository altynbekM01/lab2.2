import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fullName: string = '';
  username: string  = '';

  private data: any[] = ['Apple iPhone 11', 'Samsung Galaxy S10', 'Nokia 9', 'Apple iPhone 12',];

  constructor() { }

  getData(): string[] {
    return this.data;
  }

  addData(name: string) {
    this.data.push(name);
    // this.name = name;

  }


  saveToStorage() {
    // localStorage.setItem('fullName', this.fullName);
    localStorage.setItem('userName', this.username);
  }

  getFromStorage(): string | null | undefined {
    // return localStorage.getItem('fullName');
    return localStorage.getItem('userName');
  }
}
