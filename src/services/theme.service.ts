
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme-preference';
  private theme: 'light' | 'dark' = 'light';

  constructor() {
    const saved = (localStorage.getItem(this.key) as 'light' | 'dark' | null);
    if (saved) {
      this.theme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark';
    }
    this.apply();
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(this.key, this.theme);
    this.apply();
  }

  get current() { return this.theme; }

  private apply() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}
