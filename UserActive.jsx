import React from 'react'

const UserActive = ({name,setName}) => {
  return (
    <>
          <h1>{name}</h1>
          <button onClick={()=>{setName("riya")}}>Click me</button>
    </>
  )
}

export default UserActive
