import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  buttonText: string = 'Ver mais';
  linkToGithub: string = 'https://github.com/luqnex';
}
