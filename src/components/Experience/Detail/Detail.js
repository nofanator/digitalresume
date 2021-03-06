import React from 'react'
import Section from 'common/Section'
import { themes } from 'colors'

import styled from 'styled-components'
import { JobDuration, JobTitle, Achievements } from '../components/Job'
import ImageGrid from 'common/ImageGrid'

const Div = styled.div`
    h1 {
        margin-top: 0;
    }

    p {
        margin-bottom: 0;
    }
`

const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1, h2, h3 {
        display: inline-block;
        margin: 0;
    }
`

function Detail(props) {
    const { job } = props

    const hasPhotos = job.photos && job.photos.length > 0
    return (
        <div>
            <Section themeName={ themes.LIGHT }>
                <Div>
                    <h3><JobDuration start={ job.start } end={ job.end } /></h3>
                    <DivTitle>
                        <h1>{ job.employer }</h1>
                        <h3>{ job.title }</h3>
                    </DivTitle>
                    <p>{ job.summary }</p>
                </Div>
            </Section>
            <Section themeName={ themes.NEUTRAL }>
                <h3>Achievements</h3>
                <Achievements list={ job.achievements } />
            </Section>
            {hasPhotos &&
                <Section themeName={ themes.DARK }>
                    <ImageGrid images={ job.photos } />
                </Section>
            }
 
        </div>
    )
}

export default Detail