import { NextResponse,NextRequest } from "next/server";


export async function POST(req:NextRequest,res:NextResponse){
    console.log(req.method,'routes from test')
    const test=console.log("hello from test");
    
    if(req.method==='POST'){
        return NextResponse.json({test}, { status: 200 })
    }
    else{
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
    
}
export async function GET(req:NextRequest,res:NextResponse){

    console.log(req.method,'routes from test')
    const test=console.log("hello from test");
    
    if(req.method==='GET'){
        return NextResponse.json({test}, { status: 200 })
    }
    else{
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
    
}