import React , {useContext} from 'react'
import { userNameContext } from '../context/context'

const ProfileIcon = () => {

    const { userName } = useContext(userNameContext)

  return (
    <div>
        {userName}
    </div>
  )
}

export default ProfileIcon
