import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') appHoverHighlight!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    // console.log(event);
    this.highlight('#ff3366');
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    this.highlight(this.appHoverHighlight);
  }

  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this.appHoverHighlight || 'transparent';
  }

  highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
