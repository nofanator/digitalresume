import React from 'react'
import ProfileImage from './components/ProfileImage'
import Section from 'common/Section'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
`



function Intro(props) {
    const { name, summary, profileImage } = props
    return (
        <Section>
            <Div>
                <ProfileImage imagePath={ profileImage } />
                <h1>{ name }</h1>
                <p>{ summary }</p>
            </Div>
        </Section>
    )
}

export default Intro

