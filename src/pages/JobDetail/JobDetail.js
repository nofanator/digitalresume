import React from 'react'
import { Link } from 'react-router-dom'

import PageTemplate from '../PageTemplate'

import { themes } from 'colors'
import Section from 'common/Section'

import { Detail } from 'components/Experience'
import About from 'components/About'

import styled from 'styled-components'

const BackDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function JobDetail(props) {
    return (
        <PageTemplate>
            <Section themeName={ themes.DARK } skinny={ true }>
                <BackDiv>
                    <Link to="/">Back</Link>
                    <span>Chris Knopf</span>
                </BackDiv>
            </Section>
            <Detail job={ props } />
            <About themeName={ themes.DARK } />
        </PageTemplate>
    )
}

export default JobDetail