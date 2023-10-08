import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-tutorial',
  templateUrl: './pipe-tutorial.component.html',
  styleUrls: ['./pipe-tutorial.component.scss'],
})
export class PipeTutorialComponent {
  price: number = 100;
  product: string = 'Apple iphone 15';
  release_date: Date = new Date('2023-09-28');
  meta_data: any = { color: 'silver', display: 'retina', dpi: 192 };

  dob = new Date('1998-05-12').toISOString();
}
