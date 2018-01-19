import React from 'react'
import ProfileImage from './components/ProfileImage'

function Intro(props) {
    const { name, summary, profileImage } = props
    return (
        <div>
            <ProfileImage imagePath={ profileImage } />
            <h1>{ name }</h1>
            <p>{ summary }</p>
        </div>
    )
}

export default Intro

