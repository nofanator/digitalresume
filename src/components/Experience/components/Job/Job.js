import React from 'react'
import PropTypes from 'prop-types'
import Achievements from './components/Achievements'

import styled from 'styled-components'
import { getTheme } from 'colors'

const Div = styled.div`
    border-bottom: 1px dashed ${props => props.borderColor};
    margin: 16px 0;
    h3 {
        margin: 6px 0 12px !important;
    }
    &:last-child {
        border-bottom: none;
    }
`
const TitleInner = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Job(props) {
    const { job, themeName } = props

    const theme = getTheme(themeName)

    return (
        <Div borderColor={ theme.TEXT }>
            <span>{`${job.start} - ${job.end}`}</span>
            <h3>
                <TitleInner>
                    { job.employer }
                    <span>{ job.title }</span>
                </TitleInner>
            </h3>
            <p>{ job.summary }</p>
            <Achievements list={ job.achievements } />
        </Div>
    )
}

Job.propTypes = {
    themeName: PropTypes.string.isRequired,
}

export default Job