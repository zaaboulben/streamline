import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest, res: NextResponse) {
  const requestUrl = new URL(req.nextUrl);
  const code = requestUrl.searchParams.get("code");
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
 
  console.log('code', code);
  try {
     
  console.log('code', code);
    // Échange du code d'autorisation contre un jeton d'accès
    const tokenResponse = await axios.post(
      
      'https://www.linkedin.com/oauth/v2/accessToken',
      `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`
    );

    // Stockez le jeton d'accès dans votre application
    const accessToken = tokenResponse.data.access_token;
    const profileResponse = await axios.get(
      'https://api.linkedin.com/v2/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    // Redirigez l'utilisateur vers la page d'accueil ou une autre page après l'authentification réussie
    return NextResponse.redirect(`http://localhost:3000/`);
  } catch (error) {
    console.error(error);
    // Gérez les erreurs d'authentification ici
    return NextResponse.json({ error: 'Erreur d\'authentification' }, { status: 500 });
  }
}
