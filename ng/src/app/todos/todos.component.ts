import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos = [
    {id: 0, title: 'todo 1'},
    {id: 1, title: 'todo '},
  ]
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => this.todos.push({id: 3, title: 'slkdhk'}), 1000)
      console.log('todos init')
  }
}
