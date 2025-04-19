import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'custom-skill-card',
  templateUrl: './skill-card.component.html',
  styles: [],
})
export class SkillCardComponent implements AfterViewInit {
  @Input() name: string = '';
  @Input() percentage: number = 0;
  isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit() {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.isVisible = true;
            observer.disconnect(); // Deja de observar después de activarse
          }
        },
        { threshold: 0.3 } // Se activa cuando el 30% de la tarjeta es visible
      );

      observer.observe(this.el.nativeElement);
    }
}
