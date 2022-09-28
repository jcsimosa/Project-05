import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function Reviews({review,deleteComment,update}) {
    
    const {id} = useParams()
    const [errors, setErrors] = useState('')
    const [toggleForm, setToggleForm] = useState(false)
    const [newComment, setNewComment] = useState('')
    const [render, setRender] = useState(false)
    
    function handleDelete(){
        fetch(`/reviews/${review.id}`,{
          method:'DELETE'
        })
        .then(res => {
          if(res.ok){
            deleteComment(review.id)   
          } else {
            res.json().then(data => setErrors(data.errors))
          }
        })
      }

    

      const updateReview = (e) => {
        e.preventDefault()

        const newdata = {
            comment: newComment
        }
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newdata) 
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(update)
                    e.target.reset()
                } else {
                    resp.json().then(data => setErrors(data.errors))
                }
            })
    }



   
    console.log(render)
    function showForm(e) {
        setToggleForm(!toggleForm)
    }
    return (
        <div>
             <>
                 <h4>{review.comment_username}</h4>
                 <h4>{review.comment}</h4>
                 <button onClick={handleDelete}>Delete Comment</button>
                 <button onClick={showForm}>Edit Comment</button>
                 {toggleForm ? 
                <form onSubmit={updateReview}>
                    <input placeholder="What do you want to say" onChange={(e) => setNewComment(e.target.value)}></input>
                    <input type='submit' value="update"></input>
                </form> : null
                }
            </>    
        </div>
    )
}
export default Reviews