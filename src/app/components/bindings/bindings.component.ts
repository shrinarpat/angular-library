import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss'],
})
export class BindingsComponent {
  morningMessage: string = 'Hello, good morning!';
  eveningMessage: string = 'Hi, good evening!';

  isMorning: boolean = false;
  logoWidth: number = 200;
  logo: string =
    'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp';
}
