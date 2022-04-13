import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addHandle = new EventEmitter();
  value: string;

  constructor() {
    this.value = '';
  }

  ngOnInit(): void {
  }
}
