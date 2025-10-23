import { Component } from '@angular/core';
import { ParametrizacionComponent } from "../parametrizacion/parametrizacion.component";
import { Route, RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [ParametrizacionComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
}
