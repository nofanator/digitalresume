import React from 'react'
import PropTypes from 'prop-types'

import Section from 'common/Section'
import Spinner from './components/Spinner'

import styled from 'styled-components'


const Div = styled.div`
    text-align: center;
    p {
        font-style: italic;
    }
`

function Loading(props) {
    const { description } = props

    return (
        <Section>
            <Div>
                <h3>Simulating Load &amp; Caching Data...</h3>
                <Spinner />
                {description && <p>{ description }</p>}
            </Div>
        </Section>
    )
}

Loading.propTypes = {
    description: PropTypes.string
}

export default Loading