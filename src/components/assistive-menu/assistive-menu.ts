import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-assistive-menu',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './assistive-menu.html',
  styleUrl: './assistive-menu.css'
})
export class AssistiveMenuComponent {
  open = signal(false);
  // Position in pixels from top-left
  x = signal(24);
  y = signal(200);
  dragging = false;
  startX = 0;
  startY = 0;

  menu = [
    { icon: 'bi-house', label: 'Home', target: '#home' },
    { icon: 'bi-person', label: 'About', target: '#about' },
    { icon: 'bi-mortarboard', label: 'Education', target: '#education' },
    { icon: 'bi-kanban', label: 'Projects', target: '#projects' },
    { icon: 'bi-briefcase', label: 'Experience', target: '#experience' },
    { icon: 'bi-award', label: 'Certs', target: '#certifications' },
    { icon: 'bi-trophy', label: 'Achievements', target: '#achievements' },
    { icon: 'bi-emoji-smile', label: 'Hobbies', target: '#hobbies' },
    { icon: 'bi-chat-right-text', label: 'Feedback', target: '#contact' },
  ];

  onPointerDown(ev: PointerEvent) {
    this.dragging = true;
    (ev.target as HTMLElement).setPointerCapture(ev.pointerId);
    this.startX = ev.clientX - this.x();
    this.startY = ev.clientY - this.y();
  }

  onPointerMove(ev: PointerEvent) {
    if (!this.dragging) return;
    this.x.set(ev.clientX - this.startX);
    this.y.set(ev.clientY - this.startY);
  }

  onPointerUp(ev: PointerEvent) {
    this.dragging = false;
  }

  toggleOpen() {
    this.open.set(!this.open());
  }

  @HostListener('window:resize')
  onResize() {
    // could clamp position within viewport if desired
  }
  @ViewChild('toggleBtn')
  toggleBtn!: ElementRef;
  @HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent) {
  if (!this.toggleBtn.nativeElement.contains(event.target)) {
    this.open.set(false);
  }

}

  closeMenu() {
    this.open.set(false);
  }


getFabTransform(): string {

  return 'translate(0,0)';
}

getItemTransform(index: number): string {
  if (!this.open()) return 'translate(0, 0)';

  const angle = (index / this.menu.length) * Math.PI * 2;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return `translate(${x}px, ${-y}px)`;
}


}
