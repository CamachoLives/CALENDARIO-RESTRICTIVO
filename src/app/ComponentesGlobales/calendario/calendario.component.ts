import { Component } from '@angular/core';
import { CalendarOptions, EventClickArg, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendario',
  imports: [FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek',
    },
    events: [
      { title: 'Reunión de proyecto', date: '2025-10-23' },
      { title: 'Entrega de módulo Intranet', date: '2025-10-25' },
    ],
    select: this.onDateSelect.bind(this),
    eventClick: this.onEventClick.bind(this),
  };

  onDateSelect(info: DateSelectArg) {
    const title = prompt('Ingrese el nombre de la actividad:');
    if (title) {
      const calendarApi = info.view.calendar;
      calendarApi.addEvent({
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
      });
    }
  }

  onEventClick(info: EventClickArg) {
    if (confirm(`¿Eliminar la actividad "${info.event.title}"?`)) {
      info.event.remove();
    }
  }
}
