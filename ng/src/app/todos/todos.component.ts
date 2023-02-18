import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'


export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  textField = 'asdsd'
  @Input() todos: Todo[] = []
  @Output() onToggle = new EventEmitter<number>()
  constructor() {}
  ngOnInit(): void {
  }

  onChange(id: number) {
    this.onToggle.emit(id)
  }
}
