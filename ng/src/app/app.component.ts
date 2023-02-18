import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'ng app'
  counter = 0

  onBlur() {
    this.counter -= 1
  }
  onClick() {
    this.counter += 1
  }
}
