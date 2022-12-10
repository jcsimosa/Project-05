import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import CommentData from "./CommentData";

function MyComments({currentUser}){

    const [animesCommented , setAnimeCommented] = useState([])
    const [errors, setErrors] = useState('')

   
    
    useEffect(() => {
        fetch("/animes")
        .then(resp => {
            if (resp.ok){
                resp.json(). then(setAnimeCommented)
            }  else {
                resp.json().then(data => setErrors(data.error))
            }
        })
    },[])
    

    const mycomments = animesCommented.map((commentobj) => {
        return <CommentData key={commentobj.id} currentUser={currentUser} commentobj={commentobj}/>
    })

    return(
    <div>
        <h4 className="text-4xl font-bold text-black-600" >
            Your activity:
        </h4>
        {mycomments}
    </div>
    )
}
export default MyComments