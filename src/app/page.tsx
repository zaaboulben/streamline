
import DataSearch from '@/components/Element/DataSearch';
import Searchsection from '@/components/Element/dashboardElement/Searchsection';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Script from 'next/script'
import { use, useEffect } from 'react';

export default function Home() {




//  useEffect(() => {
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1727405647683119',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v18.0'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//          //@ts-ignore

//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//          //@ts-ignore

//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
//   }, [])

//   const login = () => {
//     window.FB.login(function(response) {
//       if (response.authResponse) {
//        console.log('Welcome!  Fetching your information.... ');

//        FB.getLoginStatus(function(response) {
//             //@ts-ignore

//         statusChangeCallback(response);
//         console.log(response);
        
//       });
       
//       } else {
//        console.log('User cancelled login or did not fully authorize.');
//       }
//   });
//   }
//   function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//     //@ts-ignore
//       statusChangeCallback(response);
//     console.log(response);
    
//     });
//     console.log('check login state');

    
//   }



  return (
    <main className=" min-h-screen w-screen inline-flex">
        

       <Searchsection />
        <DataSearch/>

    </main>
  )
}
