import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';

  constructor(private router: Router) {}

  handleClick() {
    window.open(this.buttonLink, '_blank');
  }
}
