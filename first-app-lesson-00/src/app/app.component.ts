// app root 컴포넌트의 설명하는 부분
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
