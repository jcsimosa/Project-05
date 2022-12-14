import React, { useEffect, useState } from "react";


function Users() {
   
    const [allusers, setAllUsers] = useState([])
    const [rerender, setRerender] = useState('hol')

    useEffect(() => {
        fetch("/users")
        .then(r => {
            if (r.ok) {
                r.json().then(setAllUsers)
            }
        })
    },[])
    
    const deleted = (id) => setAllUsers(allusers.filter(u => u.id !== id))

    const individualUser = allusers.map((user)=>{


        
        const deleteuser = () => {
            fetch(`/destroy_user/${user.id}`, {
                method:'DELETE'
            })
            .then(r => {
                if (r.ok){
                    deleted(user.id)
                    alert('succesfully deleted')
                }
            })
        }

        return (
    <div key={user.id} className="bg--600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="ml-3 truncate font-medium text-Black">
              <span className="hidden md:inline text font-bold">Username: {user.username}</span>
            </p>
            <p className="ml-3 truncate font-medium text-Black">
              <span className="hidden md:inline text-green-600 font-bold">Status: active</span>
            </p>
            <p className="ml-3 truncate font-medium text-Black">
              <span className="hidden md:inline text-blue-600 font-bold">{user.admin ? "admin" : "user"}</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <button
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            onClick={deleteuser}
            
            >
            Delete
            </button>
            
          </div>
        </div>
      </div>
    </div>
            
        )
    }) 
    
    return (

    <div>
        {individualUser}
    </div>

    )
}
export default Users