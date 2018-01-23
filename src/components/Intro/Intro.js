import React from 'react'
import ProfileImage from './components/ProfileImage'
import Section from 'common/Section'


function Intro(props) {
    const { name, summary, profileImage } = props
    return (
        <Section  isPrimary={ false }>
            <ProfileImage imagePath={ profileImage } />
            <h1>{ name }</h1>
            <p>{ summary }</p>
        </Section>
    )
}

export default Intro

