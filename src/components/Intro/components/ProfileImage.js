import React from 'react'

function ProfileImage(props) {
    const { imagePath } = props
    
    return (
        <img src={ imagePath } />
    )
}

export default ProfileImage