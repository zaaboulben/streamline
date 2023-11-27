'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Script from 'next/script'
import { use, useEffect } from 'react';

export default function Home() {


  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     window.FB.init({
  //       //process.env.NEXT_PUBLIC_FB_PIXEL_ID
  //       appId            : '1727405647683119',
  //       xfbml            : true,
  //       version          : 'v18.0'
  //     });
  //   };
  
  // }, [])

 useEffect(() => {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1727405647683119',
      cookie     : true,
      xfbml      : true,
      version    : 'v18.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
         //@ts-ignore

     js.src = "https://connect.facebook.net/en_US/sdk.js";
         //@ts-ignore

     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  }, [])

  const login = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');

       FB.getLoginStatus(function(response) {
            //@ts-ignore

        statusChangeCallback(response);
        console.log(response);
        
      });
       
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
  });
  }
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
    //@ts-ignore
      statusChangeCallback(response);
    console.log(response);
    
    });
    console.log('check login state');

    
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div>
        <Button onClick={login}>Sign in with facebook</Button>
        <Button onClick={checkLoginState}>Check login state</Button>

        </div>
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"/>

    </main>
  )
}
