import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {



  title = 'lab2';
  showMain = false;
  condition = false;
  show_main(){
    this.showMain = !this.showMain
  }

  toggle(){
    this.condition = !this.condition
  }
  contact_Or_AboutUs:boolean = false;

  switch(){
    this.count2 += 1
    if (this.count2 % 2==0){this.count2 = 2}
    else {this.count2 = 1}

  }

  count2: number  = 0;
  browser = 'opera';

  name:string="Tom";
  age:number = 25;
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  private log(msg: string) {
    console.log(msg);
  }

  nummers_array = [1, 2, 3, 4, 5];

  showPreviouse = false;
}
