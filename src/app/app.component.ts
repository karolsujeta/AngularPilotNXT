import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app-pilot';

  todosList=[{
    forward: 12,
    power:4
  }]

  addTodos(e){
    this.todosList.push(e);
  }
  
}
