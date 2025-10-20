import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,

    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})



export class HeaderComponent {

  currentRoute: string = '';

  
isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isOpen = false;
    }
  }

}
