import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private element: ElementRef, private renderer: Renderer2){

    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }


  @HostListener("mouseenter") onMouseEnter() {
    this.setFontSize("50px");
    this.setFontColor("red");
  }

  @HostListener("mouseleave") onMouseLeave() {

    this.setFontSize("16px");
    this.setFontColor("black");

  }


  private setFontSize(val: string){
    this.renderer.setStyle(this.element.nativeElement, "font-size", val);

  }
  private setFontColor(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "color", val);}

}
