import { Component } from '@angular/core';
import { FullCalendarComponent  } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export default class TablesComponent {
  calendarPlugins = [dayGridPlugin];
}


