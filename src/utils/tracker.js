// src/utils/tracker.js
// Sends one visit ping to Supabase when the portfolio loads.
// Replace SUPABASE_URL and SUPABASE_ANON_KEY with your values.

const SUPABASE_URL  = 'https://quxwtoeqozrwvsxkobzj.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1eHd0b2Vxb3pyd3ZzeGtvYnpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDczMzAsImV4cCI6MjEwNTEyMzMzMH0.jzmbf_z_d9LvjlGh9sbmRaWbBW8nxBNiskJuOJv1KKg';

export async function trackVisit() {
  // Don't track if running locally on dev
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
  // Don't double-track within the same session
  if (sessionStorage.getItem('sp_tracked')) return;

  try {
    const geo = await fetch('https://ipapi.co/json/')
      .then(r => r.ok ? r.json() : {})
      .catch(() => ({}));

    const payload = {
      timestamp:   new Date().toISOString(),
      page:        location.pathname,
      referrer:    document.referrer || 'direct',
      ua:          navigator.userAgent,
      screen_w:    screen.width,
      screen_h:    screen.height,
      country:     geo.country_name || null,
      city:        geo.city         || null,
      region:      geo.region       || null,
      ip:          geo.ip           || null,
      is_mobile:   /Mobi|Android/i.test(navigator.userAgent),
    };

    await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'apikey':         SUPABASE_ANON,
        'Authorization': `Bearer ${SUPABASE_ANON}`,
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify(payload),
    });

    sessionStorage.setItem('sp_tracked', '1');
  } catch (_) {
    // Silent fail — never break the portfolio
  }
}
