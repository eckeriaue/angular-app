import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from "rxjs"

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = []

  constructor(private http: HttpClient) {}

  public fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(tap(todos => this.todos = todos))
  }

  private findTodoById(id: number) {
    return this.todos.findIndex(todo => todo.id === id)
  }

  public onToggle(id: number) {
    const index = this.findTodoById(id)
    this.todos[index].completed = !this.todos[index].completed
  }
  
  public removeTodo(id: number) {
    const index = this.findTodoById(id)
    this.todos.splice(index, 1)
  }

  public addTodo(todo: Todo) {
    this.todos.unshift(todo)
  }
}