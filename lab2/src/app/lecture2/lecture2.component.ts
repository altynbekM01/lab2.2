import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture2',
  templateUrl: './lecture2.component.html',
  styleUrls: ['./lecture2.component.css']
})
export class Lecture2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Altynbek";
  age = 20;


  colspan=2;

  count: number=0;
  increase() : void {
    this.count++;
  }
  increase2($event : any) : void {
    this.count++;
    console.log($event);
  }

  isRed = false;

  isVerdana = true;
  isSegoe = true;

  isNavy = true;

  currentClasses={
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy
  }

  condition: boolean=true;

  toggle(){
    this.condition=!this.condition;
  }

  items =["Tom", "Bob", "Sam", "Bill"];
}
