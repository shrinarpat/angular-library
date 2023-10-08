import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss'],
})
export class DomManipulationComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}
  ngAfterViewInit(): void {
    const divElement = this.elementRef.nativeElement.querySelector('#myDiv');

    this.renderer2.setStyle(divElement, 'background-color', 'blue');

  }
}
