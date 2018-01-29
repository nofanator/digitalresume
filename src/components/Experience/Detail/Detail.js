import React from 'react'
import Section from 'common/Section'
import { themes } from 'colors'

import styled from 'styled-components'
import { JobDuration, Achievements } from '../components/Job'

const Div = styled.div`
    text-align: center;

    h1 {
        margin-top: 0;
    }
`

function Detail(props) {
    const { job } = props
    return (
        <div>
            <Section themeName={ themes.LIGHT }>
                <Div>
                    <h1>{`Chris Knopf @ ${job.employer}`}</h1>
                    <h2>{ job.title }</h2>
                    <h3><JobDuration start={ job.start } end={ job.end } /></h3>
                    <p>{ job.summary }</p>
                </Div>
            </Section>
            <Section themeName={ themes.NEUTRAL }>
                <h3>Achievements</h3>
                <Achievements list={ job.achievements } />
            </Section>
        </div>
    )
}

export default Detail