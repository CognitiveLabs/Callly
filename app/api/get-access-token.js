import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default async function handler(req, res) {
  // Check for authentication (replace with your authentication logic)
  if (!req.cookies.get('supabase-session-id')) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const { data, error } = await supabase.auth
      .session()
      .getSession({ sessionToken: req.cookies.get('supabase-session-id') });

    if (error) {
      console.error('Error fetching access token:', error);
      return res.status(500).json({ error: 'Failed to fetch token' });
    }

    res.json({ accessToken: data.accessToken });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
