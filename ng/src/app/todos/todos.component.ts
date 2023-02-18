import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo, TodosService } from 'src/shared/todos.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  {

  constructor(readonly todosService: TodosService) {}
  ngOnInit(): void {
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
