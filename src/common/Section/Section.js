import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components' 
import { getTheme } from 'colors'

const Div = styled.div`
    color: ${props => props.textColor};
    background: ${props => props.backgroundColor};
`

const DivInner = styled.div`
    max-width: 600px;
    padding: ${props => props.skinny ? '10px' : '40px 10px'};
    margin: 0 auto;
`

function Section(props) {
    const { themeName, skinny } = props
    const theme = getTheme(themeName)
    return (
        <Div textColor={ theme.TEXT } backgroundColor={ theme.BACKGROUND }>
            <DivInner skinny={ skinny }>
                { props.children }
            </DivInner>
        </Div>
    )
}

Section.propTypes = {
    themeName: PropTypes.string,
    skinny: PropTypes.bool,
}

Section.defaultProps = {
    skinny: false,
}

export default Section