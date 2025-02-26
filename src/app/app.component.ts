import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/components/shared.module';  // ✅ Importamos el módulo compartido


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-menu-dashboard';
}
