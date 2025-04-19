import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() customClass: string = '';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
