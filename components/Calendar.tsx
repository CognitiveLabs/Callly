import { Calendar as FullCalendarComponent } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

// ... other imports

function Calendar({ events }) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      // Customize calendar appearance and behavior as needed
    />
  );
}

export default Calendar;
