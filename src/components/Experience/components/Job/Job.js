import React from 'react'
import PropTypes from 'prop-types'

import Achievements from './components/Achievements'
import JobTitle from './components/JobTitle'

import styled from 'styled-components'
import { getTheme } from 'colors'

const Div = styled.div`
    border-bottom: 1px dashed ${props => props.borderColor};
    margin: 16px 0;
    padding-bottom: 16px;
    h3 {
        margin: 6px 0 12px !important;
    }
    &:last-child {
        border-bottom: none;
    }
`

const A = styled.a`
    display: inherit;
    text-decoration: underline;
    text-transform: uppercase;
    cursor: pointer;
    text-align: right;
`

function Job(props) {
    const { job, themeName } = props

    const theme = getTheme(themeName)

    return (
        <Div borderColor={ theme.TEXT }>
            <span>{`${job.start} - ${job.end}`}</span>
            <JobTitle employer={ job.employer } title={ job.title } />
            <p>{ job.summary }</p>
            <A>Learn more</A>
            { /* <Achievements list={ job.achievements } /> */ }
        </Div>
    )
}

Job.propTypes = {
    themeName: PropTypes.string.isRequired,
}

export default Job