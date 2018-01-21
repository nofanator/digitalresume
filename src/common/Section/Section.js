import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components' 

const Div = styled.div`
    padding: 8px;
    color: ${props => props.isPrimary ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)'};
    background: ${props => props.isPrimary ? 'rgb(48, 50, 60)' : 'rgb(200, 187, 135)'};
`

function Section(props) {
    const { isPrimary } = props
    return (
        <Div isPrimary={ isPrimary }>
            { props.children }
        </Div>
    )
}

Section.propTypes = {
    isPrimary: PropTypes.bool,
}

Section.defaultProps = {
    isPrimary: true,
}

export default Section