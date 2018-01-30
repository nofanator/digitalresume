import React from 'react'
import ProfileImage from './components/ProfileImage'
import Section from 'common/Section'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;

    h1 {
        margin-top: 20px;
    }
`



function Intro(props) {
    const { name, summary, profileImage } = props
    return (
        <Section backgroundImage="/intro-bg.jpg">
            <Div>
                <ProfileImage imagePath={ profileImage } />
                <h1>{ name }</h1>
                <p>{ summary }</p>
            </Div>
        </Section>
    )
}

export default Intro

