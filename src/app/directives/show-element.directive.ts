import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowElement]'
})
export class ShowElementDirective implements OnInit {
  @Input('appShowElement') showElementTime: number = 1000;
  constructor(private _viewContainerRef: ViewContainerRef, private _templateRef: TemplateRef<any>) { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }, this.showElementTime);
  }

}
