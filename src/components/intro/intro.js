import React from 'react'

function Intro(props) {
    const { name } = props
    return (
        <div>
            <p>Intro Section</p>
            <h1>{ name }</h1>
        </div>
    )
}

export default Intro

