import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  description: string = '';

  handleSetDescription(type: string): void {
    switch (type) {
      case 'html':
        this.description = 'o HTML é ...';
        break;

      default:
        this.description = '';
    }

    console.log(this.description);
  }
}
