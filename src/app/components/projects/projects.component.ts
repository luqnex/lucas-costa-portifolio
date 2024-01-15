import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';

import { ButtonComponent } from '../button/button.component';
import { IRepositoriesData } from '../../interfaces/repositories';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent, CommonModule, NgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  viewProviders: [provideIcons({ bootstrapGithub })],
})
export class ProjectsComponent {
  buttonText: string = 'Ver mais';
  linkToGithub: string = 'https://github.com/luqnex';
  repositories: IRepositoriesData[] = [];

  showDetailsImageOne: boolean = false;
  showDetailsImageTwo: boolean = false;

  handleMouseEvent(img: string) {
    switch (img) {
      case 'img-one':
        this.showDetailsImageOne = !this.showDetailsImageOne;
        break;

      case 'img-two':
        this.showDetailsImageTwo = !this.showDetailsImageTwo;
        break;
    }
  }
}
