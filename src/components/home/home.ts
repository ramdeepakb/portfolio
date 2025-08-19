import { Component } from '@angular/core';
import { AssistiveMenuComponent } from '../assistive-menu/assistive-menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // AboutComponent, EducationComponent, ProjectsComponent, ExperienceComponent,
    // CertificationsComponent, AchievementsComponent, HobbiesComponent, ContactComponent,
    AssistiveMenuComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
