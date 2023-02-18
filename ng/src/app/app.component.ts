import { Component, Input } from '@angular/core'
import { type Todo } from './todos/todos.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'ng app'
  counter = 0
  todos: Todo[] = [
    {id: 0, date: new Date(), completed: true,  title: 'todo 1'},
    {id: 1, date: new Date(), completed: false,  title: 'todo '},
  ]
  onToggle(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].completed = !this.todos[index].completed
  }
}
