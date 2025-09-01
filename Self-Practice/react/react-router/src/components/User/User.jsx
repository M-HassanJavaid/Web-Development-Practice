import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
  return (
    <>
    <p>Hey, Welcome to your profile</p>
    <p>Your username is {params.username}</p>
    </>
  )
}

export default User
