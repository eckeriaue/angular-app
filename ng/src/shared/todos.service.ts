import { Injectable } from "@angular/core"


export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 0, date: new Date(), completed: true,  title: 'todo 1'},
    {id: 1, date: new Date(), completed: false,  title: 'todo '},
  ]

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
}