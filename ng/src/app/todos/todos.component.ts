import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { delay } from 'rxjs'
import { TodosService } from 'src/shared/todos.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit  {

  public loading: boolean = true
  public searchParams: string = ''
  constructor(readonly todosService: TodosService) {}
  ngOnInit(): void {
    const todos$ = this.todosService.fetchTodos().pipe(
      delay(500)
    )
    todos$.subscribe(() => this.loading = false)
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
