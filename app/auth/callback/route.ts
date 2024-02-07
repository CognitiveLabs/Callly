// auth/callback/route.ts

import type { Database } from '@/types_db';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// Import Google API client
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const { user } = await supabase.auth.exchangeCodeForSession(code);

    // Get Google Access Token from Supabase
    const { access_token } = user?.user_metadata.provider_token.google;

    // Initialize Google Calendar API
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Fetch user's calendar events
    const { data: calendarData } = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    });

    console.log('User Calendar Data:', calendarData);

    // Redirect to Dashboard or Calendar Page
    return NextResponse.redirect('/calendar');
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
