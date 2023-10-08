import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss'],
})
export class NgContainerComponent implements OnInit {
  item = { name: 'narpat', age: 25 };
  myContext = { item: this.item };
  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };

  @ViewChild('templateForm') form!: TemplateRef<any>;

  ngOnInit(): void {}

  printTemplate() {
    console.log(this.form);
  }
}
