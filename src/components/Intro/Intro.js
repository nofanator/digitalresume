import React from 'react'
import ProfileImage from './components/ProfileImage'
import Section from 'common/Section'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;

    h1 {
        margin-top: 20px;
    }

    p {
        margin-bottom: 0;
    }
`



function Intro(props) {
    const { name, summary, profileImage, backgroundImage } = props
    return (
        <Section backgroundImage={ backgroundImage }>
            <Div>
                <ProfileImage imagePath={ profileImage } />
                <h1>{ name }</h1>
                <p>{ summary }</p>
            </Div>
        </Section>
    )
}

export default Intro

