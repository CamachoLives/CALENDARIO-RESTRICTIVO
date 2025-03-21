import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

  correo = "Example@Hotmail.com"

  clientes = [
    {
      name: 'Brinsa',
      level: 'High',
      activity: 'development',
      porcentage: '60'
    },
    {
      name: 'Mnemo',
      level: 'Medium',
      activity: 'Cibersecurity',
      porcentage: '80'
    },
    {
      name: 'Siscomputo',
      level: 'Low',
      activity: 'Infraestructure',
      porcentage: '20'
    }
  ]

  contacts = [
    {
      name: 'Cristian Camacho',
      phone: '3148917721',
      image: 'https://github.com/CamachoLives.png',
      contacts: 87,
      gradientColor: 'bg-gradient-to-tr from-blue-600 to-blue-400',
      contactColor: 'text-green-500'
    },
    {
      name: 'Esteban Heredia',
      phone: '3202152786',
      image: 'https://github.com/here0503.png',
      contacts: 43,
      gradientColor: 'bg-gradient-to-tr from-green-600 to-green-400',
      contactColor: 'text-yellow-500'
    },
    {
      name: 'Luis Villamizar',
      phone: '3118145001',
      image: 'https://github.com/LuisVillamizar.png',
      contacts: 15,
      gradientColor: 'bg-gradient-to-tr from-red-600 to-red-400',
      contactColor: 'text-red-500'
    }
  ];

}
