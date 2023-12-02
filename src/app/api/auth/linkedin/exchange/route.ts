import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest, res: NextResponse) {
  const requestUrl = new URL(req.nextUrl);
  const code = requestUrl.searchParams.get("code");
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
 
  console.log('code', code);
   
  console.log('code', code);
  try {
    // Échange du code d'autorisation contre un jeton d'accès
     
  console.log('code', code);
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`
    );

    // Retournez le jeton d'accès à l'application cliente
    return NextResponse.json({ access_token: tokenResponse.data.access_token }, { status: 200 } );
  } catch (error) {
    console.error(error);
    // Gérez les erreurs d'échange de jeton ici
    return NextResponse.json({ error: 'Erreur d\'échange de jeton' }, { status: 500 });
  }
}
