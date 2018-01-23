import React from 'react'
import Job from './components/Job'
import Section from 'common/Section'
import { themes } from 'colors'


function Experience(props) {
    const { experience } = props
    return (
        <Section themeName={ themes.DARK }>
            <h2>Experience</h2>
            {experience.map((job, i) =>
                <Job key={`job-${i}`} job={ job } />
            )}
        </Section>
    )
}

export default Experience