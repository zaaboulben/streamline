"use client"
import axios from "axios";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/helpers/auth";
import Image from "next/image";
import { use, useEffect } from "react";
import { url } from "inspector";

export default function DataSearch() {
    
  const redirected= async ()=>{
    const response = await axios.get('api/auth/linkedin');
    console.log(response.data);

    
  }

  return (
    <div>
      <Button onClick={redirected}>Se connecter avec LinkedIn</Button>
        <Link href="api/auth/linkedin" > qsdfdsz</Link>
    </div>
  );
}

      



