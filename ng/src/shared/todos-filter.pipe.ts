import { Pipe, type PipeTransform } from "@angular/core"
import { Todo } from "./todos.service"

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: Todo[], searchParams = ''): Todo[] {
    if (!searchParams.trim()) return todos
    return todos.filter(todo => todo.title
      .toLowerCase()
      .indexOf(searchParams.toLowerCase()) !== -1
    )
  }
}