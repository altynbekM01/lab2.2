import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



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
}
