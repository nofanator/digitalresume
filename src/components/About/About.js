import React from 'react'
import Section from 'common/Section'
import HorizontalList from 'common/HorizontalList'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
`

function About(props) {
    const { summary, repo, tech } = props

    return (
        <Section>
            <Div>
                <h2>About this site</h2>
                <p>{ summary }</p>
                <h3>Tech used</h3>
                <HorizontalList listKey="tech" list={ tech } center={ true } />
                <p>{ repo }</p>
            </Div>
        </Section>
    )
}

export default About