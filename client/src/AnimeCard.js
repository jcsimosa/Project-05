import React from "react";
import {BrowserRouter,Link, Navigate, useNavigate, useParams}from "react-router-dom"
import{useState} from "react"




function AnimeCard({anime}) {

    const [comment, setComment] = useState('')
    const [singleAnime, setSingleAnime] = useState('')
    const {id} = useParams()
    
    const [showForm, setShowForm] = useState(false)

    const userInput = e =>{
        setComment(pV => ({...pV,[e.target.name]: e.target.value}))
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const submitcomment = e => {
        e.preventDefault()
        const data = {
            ...comment,
            ...anime
        }
        
        fetch("/reviews", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(r => {
            if (r.ok){
                r.json().then(console.log)
            }
        })
        e.target.reset();
        }

        // const show = (e) => {
        //     fetch(`/animes/${id}`)
        //     .then(resp => {
        //         if (resp.ok){
        //             resp.json().then(r => {
        //                 navigate(`/anime/${id}`)
        //             })
        //         }
        //     },
             
        // },

        
    return (
        
        <div>
                <Link to={`/animes/${id}`}>
                <p>Name: {anime.animeTitle}</p>
                </Link>   
                <img src={anime.animeImg} onClick={toggleForm}></img>
                <p>released:{anime.releasedDate}</p>
                {showForm ? 
                <form onSubmit={submitcomment}>
                    <input required="comment" name="comment" onChange={userInput}></input>
                    <br />
                    <input type='submit' value='Send Comment'></input>
                </form>
                :
                null}
        </div>
    )
}
export default AnimeCard