import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async  function GET(res:NextResponse,req:NextRequest ) {
try {
    const InstagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_USER_TOKEN}`
    const response = await axios.post(InstagramUrl)
  return NextResponse.json({ res:response }, { status: 200 })
}
catch (error) {
  return NextResponse.json({ error }, { status: 500 })
} 


  
}
