import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapInstagram,
  bootstrapLinkedin,
  bootstrapGithub,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  viewProviders: [
    provideIcons({ bootstrapInstagram, bootstrapLinkedin, bootstrapGithub }),
  ],
})
export class AboutComponent {}
