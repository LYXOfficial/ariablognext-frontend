"use client";
import { useEffect,useState } from "react";
export default function PostChat(){
    // useEffect(()=>{
    //     const postChatDOM=(document.getElementById("chatIframe") as HTMLElement).contentWindow.document;
    //     const style=postChatDOM.createElement("style");
    //     style.innerText=`
    //         :root{
    //             --heo-theme:var(--aria-theme)!important;
    //         }`
    // },[]);
    const [loaded,setLoaded]=useState(0);
    const router=useRouter();
    useEffect(()=>{
        if(loaded==1){
            postChat_load();
            tianliGPT(true);
            setLoaded(2);
        }
        window.history.onpushstate=null;
    },[loaded]);
    useEffect(()=>{
        tianliGPT(true);
    },[router]);
    return <>
        <link rel="stylesheet" href="https://ai.tianli0.top/static/public/postChatUser_summary.min.css"/>
        <script
            dangerouslySetInnerHTML={{__html:`
            let tianliGPT_postSelector='#article-container:not(#article-container.page)>#post-maincontent';
            let tianliGPT_recommendation=true;
            let tianliGPT_Title='这是文章摘要！QwQ';
            let tianliGPT_postURL="*/posts/*";
            var postChatConfig={
                backgroundColor: "#ed709b",
                bottom: "16px",
                left: "16px",
                fill: "#FFFFFF",
                width: "44px",
                frameWidth: "375px",
                frameHeight: "600px",
                defaultInput: true,
                upLoadWeb: true,
                showInviteLink: true
            };`
        }}/>
        <script async data-postChat_key="b2697bd81e3904826ee9c180db306e61b2691c" 
            src="https://ai.tianli0.top/static/public/postChatUser_summary.min.js" onLoad={
                ()=>{setLoaded(1)}
            }/>
    </>
}