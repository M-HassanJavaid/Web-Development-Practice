import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, setadjective, getAdjective }) => {
    console.log('navbar has rendered!')
    return (
        <>
            <nav onClick={() => { setadjective('excellent') }}>
                {adjective}
            </nav>
            <button onClick={getAdjective}>Get Adjective</button>
        </>
    )
}

export default memo(Navbar) //memo stop a componenet to rerender unitil have change in props
