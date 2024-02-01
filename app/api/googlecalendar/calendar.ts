import { google } from 'googleapis';

export async function getServerSideProps(context) {
  // Obtain authentication details (access token, etc.) for the current user
  const auth = await getAuthDetails(); // Replace with your authentication logic

  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime'
    });

    return {
      props: {
        events
      }
    };
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    // Handle errors gracefully, e.g., return empty events or display an error message
    return {
      props: {
        events: []
      }
    };
  }
}
