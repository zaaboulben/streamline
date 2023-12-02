import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const state = 'random-state'; // Vous pouvez générer un état aléatoire pour des raisons de sécurité
  const scopes = 'email w_member_social profile openid ';
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scopes}`; // Vous pouvez ajouter les scopes nécessaires ici

  return NextResponse.redirect(authUrl);
}