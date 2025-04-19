import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-project-card',
  templateUrl: './project-card.component.html',
  styles: [],
})
export class ProjectCardComponent {
  @Input() imgSrc: string = '';
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
}
