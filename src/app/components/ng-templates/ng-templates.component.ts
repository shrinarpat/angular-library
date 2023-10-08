import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.scss'],
})
export class NgTemplatesComponent {
  validTemplate: boolean = false;
  toggleOn: boolean = false;
  age: number = 25;

  names: string[] = ['Narpat', 'Kailash', 'Rajat', 'Aman'];
}
