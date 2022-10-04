import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function Reviews({review,deleteComment,update,currentUser}) {
    
    const {id} = useParams()
    const [errors, setErrors] = useState('')
    const [toggleForm, setToggleForm] = useState(false)
    const [newComment, setNewComment] = useState('')
    const [render, setRender] = useState(false)
    


    console.log('review',review.comment_username)
    console.log('currentUser',currentUser.username)

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


    function showForm(e) {
        setToggleForm(!toggleForm)
    }
    return (
        <div>

            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{review.comment_username}</p>
                            <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                        </div>
                        <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">{review.comment}</p>
                
                {currentUser.username === review.comment_username &&
                <div className="justify-end mt-4">
                    <button
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    onClick={handleDelete}
                    >
                       delete
                    </button>
                    <button
                    onClick={showForm}
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Edit comment
                    </button>
                </div>}
                {toggleForm &&
                <form onSubmit={updateReview}>
                    <div className="mt-4">
                        <label
                            htmlFor="comment"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Comment:
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="comment"
                                required="comment"
                                onChange={(e) => setNewComment(e.target.value)}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"

                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>}
            </div> 
                




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