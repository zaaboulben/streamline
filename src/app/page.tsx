'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        //process.env.NEXT_PUBLIC_FB_PIXEL_ID
        appId            : '586191276992026',
        xfbml            : true,
        version          : 'v18.0'
      });
    };
  
  }, [])
  const facebookinit=()=>{
   
  
  }
  const login = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       window.FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
  });
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div>
        <Button onClick={login}>Sign in with Google</Button>
        </div>
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"/>

    </main>
  )
}
