import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective implements OnInit {
  @Input('appChangeBackgroundColor') backgroundColor: string = 'black';
  constructor(private _elementRef: ElementRef<HTMLDivElement>) { }

  ngOnInit(): void {
    this._elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
