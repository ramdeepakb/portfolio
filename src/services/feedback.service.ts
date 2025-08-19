
import { Injectable } from '@angular/core';

export interface Feedback {
  name: string;
  email: string;
  message: string;
  rating: number;
  submittedAt: string;
}

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private key = 'portfolio-feedback';
  save(feedback: Omit<Feedback, 'submittedAt'>) {
    const list: Feedback[] = JSON.parse(localStorage.getItem(this.key) || '[]');
    const entry: Feedback = { ...feedback, submittedAt: new Date().toISOString() };
    list.push(entry);
    localStorage.setItem(this.key, JSON.stringify(list));
    return entry;
  }
  all(): Feedback[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }
}
