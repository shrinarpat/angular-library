import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-child-sibling',
  templateUrl: './lifecycle-hooks-child-sibling.component.html',
  styleUrls: ['./lifecycle-hooks-child-sibling.component.scss'],
})
export class LifecycleHooksChildSiblingComponent implements OnInit {
  @Input('message') message!: string;
  countBetter: number = 0;
  ngOnInit(): void {
    // console.log('child sibling initialization');
  }

  increaseCounter() {
    this.countBetter++;
  }
}
