// pages/calendar.tsx
'use client';

import { useSupabase } from '../supabase-provider';
import { useEffect, useState } from 'react';

// Import useSupabase hook

const CalendarPage = () => {
  const { supabase } = useSupabase(); // Access Supabase client
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      try {
        // Fetch user's calendar events from Supabase
        const { data, error } = await supabase
          .from('calendar_events')
          .select('*')
          .limit(10);

        if (error) {
          throw error;
        }

        setCalendarEvents(data);
      } catch (error) {
        console.error('Error fetching calendar events:', error.message);
      }
    };

    fetchCalendarEvents();
  }, [supabase]);

  return (
    <div>
      <h1>Google Calendar Events</h1>
      <ul>
        {calendarEvents.map((event) => (
          <li key={event.id}>
            <div>{event.summary}</div>
            <div>{event.start.dateTime}</div>
            <div>{event.end.dateTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPage;
