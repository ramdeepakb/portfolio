
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../components/home/home').then(m => m.Home), title: 'Home' },
  // { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent), title: 'About' },
  // { path: 'education', loadComponent: () => import('./components/education/education.component').then(m => m.EducationComponent), title: 'Education' },
  // { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent), title: 'Projects' },
  // { path: 'experience', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent), title: 'Experience' },
  // { path: 'certifications', loadComponent: () => import('./components/certifications/certifications.component').then(m => m.CertificationsComponent), title: 'Certifications' },
  // { path: 'achievements', loadComponent: () => import('./components/achievements/achievements.component').then(m => m.AchievementsComponent), title: 'Achievements' },
  // { path: 'hobbies', loadComponent: () => import('./components/hobbies/hobbies.component').then(m => m.HobbiesComponent), title: 'Hobbies' },
  // { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent), title: 'Contact' },
  // { path: '**', redirectTo: '' }
];
