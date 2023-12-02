    export const LIKEDIN_STATE=process.env.LINKEDIN_STATE;
    const LIKEDIN_CLIENT_ID=process.env.LINKEDIN_CLIENT_ID;
    const LIKEDIN_REDIRECT_URI=process.env.LINKEDIN_REDIRECT_URI;
    const LIKEDIN_SCOPE=process.env.LINKEDIN_SCOPE;




export const getURLWithQueryParams=(baseUrl,params)=>{

    const query=Object.entries(params).map(([key,value])=>`${key}=${value}`).join('&');

    return `${baseUrl}?${query}`;

}   


export const LINKEDIN_URL=getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization',{
    response_type:'code',
    client_id:LIKEDIN_CLIENT_ID,
    redirect_uri:LIKEDIN_REDIRECT_URI,
    state:LIKEDIN_STATE,
    scope:LIKEDIN_SCOPE
})

console.log(LINKEDIN_URL,'linkedin url');

export  const queryToobject=queryString=>{
    const completeString=
    queryString[0]==='?'?queryString.slice(1):queryString;
const queryPairs=completeString.split('&')
.spli("&").map(str=>str.split("=").map(decodeURIComponent));
return queryPairs.educe(
    (acc, [key, value]) => (key ? { ...acc, [key]: value } : acc),
    {}
  );
};
