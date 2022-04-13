import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { Lecture2Component } from './lecture2/lecture2.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/list/list.component';
import { TodoFormComponent } from './todo/form/form.component';
import { ModelsComponent } from './todo/models/models.component';
import { TodoItemComponent } from './todo/list/item/item.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactsComponent,
    AboutComponent,
    Lecture2Component,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    ModelsComponent,
    TodoItemComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
