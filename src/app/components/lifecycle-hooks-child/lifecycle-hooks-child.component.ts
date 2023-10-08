import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LifecycleHooksChildSiblingComponent } from '../lifecycle-hooks-child-sibling/lifecycle-hooks-child-sibling.component';

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.scss'],
})
export class LifecycleHooksChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('count') count!: number;
  @Input('counterChange') counterChange!: boolean;
  @Input('user') user!: UserModel;

  message: string = 'hello';

  childCounter: number = 0;
  interval: any;

  @ContentChild(LifecycleHooksChildSiblingComponent)
  siblingChild!: LifecycleHooksChildSiblingComponent;

  @ViewChild('headingOne') headingOne!: ElementRef;
  @ViewChild(LifecycleHooksChildSiblingComponent)
  siblingChild2!: LifecycleHooksChildSiblingComponent;

  constructor() {
    // console.log('Child component constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
      ngOnChanges failed to detect the changes in object or all the other javascirpt types based on objects, It only detect the changes in these properties when their is change in reference of whole object otherwise like when we change in properties of object then it will not able to detect the changes
    */
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('child component ng onInit ');
  }

  ngDoCheck() {
    /* 
      When the default angular change detection is not able to detect the changes then we can use the doCheck method for custom change detection

      NOTE: Do not use ngOnChanges and ngDoCheck both for same properties change detection it can lead to unwanted errors
    */
    // console.log(this.user);
  }

  ngAfterContentInit(): void {
    /* 
      ngAfterContentInit runs after the content of the component is projected and child component is loaded
    */
    // console.log('child after content init ', this.siblingChild?.message);
  }

  ngAfterContentChecked(): void {
    /* 
      ngAfterContentChecked run after each chagne in the projected content of the component and here we can run all logic based on the updated projected content
    */
    // console.log('child after content checked ', this.siblingChild?.message);
  }

  ngAfterViewChecked(): void {
    /* 
      ngAfterViewChecked - This hook is called after the components view has been checked for the changes - It run every time when there is change in the components view
    */

    console.log(
      'child component ngAfterViewChecked ',
      this.siblingChild2.countBetter
    );
  }

  ngAfterViewInit(): void {
    /* 
      ngAfterViewInit - This hook is called once the components view has been initialized, We generally use this hook to access the DOM element or child component
    */

    console.log('ng afterViewInit ', this.headingOne);
    this.headingOne.nativeElement.style.backgroundColor = 'yellowgreen';
  }

  ngOnDestroy(): void {
    /* 
      ngOnDestroy: This hook is called just before the component is destroyed and removed from the DOM. It's used for cleaning up resources like subscriptions, timers, or event listeners to prevent memory leaks.
    */

    clearInterval(this.interval);
  }

  increaseCount() {
    this.interval = setInterval(() => {
      this.childCounter++;
      console.log(this.childCounter);
    }, 1000);
  }
}
