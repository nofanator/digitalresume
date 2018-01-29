import React from 'react'
import { Link } from 'react-router-dom'

import PageTemplate from '../PageTemplate'

import { themes } from 'colors'
import Section from 'common/Section'

import { Detail } from 'components/Experience'
import About from 'components/About'




function JobDetail(props) {
    return (
        <PageTemplate>
            <Section themeName={ themes.DARK } skinny={ true }>
                <Link to="/">Back</Link>
            </Section>
            <Detail job={ props } />
            <About />
        </PageTemplate>
    )
}

export default JobDetail