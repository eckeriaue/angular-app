import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { TodosComponent } from './todos/todos.component'
import { TodoFormComponent } from './todo-form/todo-form.component'
import { FormsModule } from '@angular/forms'
import { TodosFilterPipe } from 'src/shared/todos-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
