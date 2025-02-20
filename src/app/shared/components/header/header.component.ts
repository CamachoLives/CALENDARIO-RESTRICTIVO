import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.cleanRoute(event.url);
      }
    });
  }
  cleanRoute(route: string): string {
    const x = route.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().toUpperCase(); // Limpia y estandariza el texto

    switch (x) {
        case 'DASHBOARD':
            return 'Inicio';
        case 'PROFILE':
            return 'Perfil';
        case 'TABLES':
            return 'Actividades';
        default:
            return x; // Retorna el valor limpio si no coincide con ninguna opción
    }
}
  
}
