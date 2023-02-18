import { Component } from '@angular/core'
import { Todo, TodosService } from 'src/shared/todos.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  title: string = ''

  constructor(private todoService: TodosService) {}

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.todoService.addTodo(todo)
    this.title = ''
  }
}
