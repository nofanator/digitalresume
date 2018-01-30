import React from 'react'
import PropTypes from 'prop-types'
import Section from 'common/Section'
import HorizontalList from 'common/HorizontalList'

import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
`

function About(props) {
    const { summary, repo, tech, themeName } = props

    return (
        <Section themeName={ themeName }>
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

About.propTypes = {
    themeName: PropTypes.string,
}

export default About