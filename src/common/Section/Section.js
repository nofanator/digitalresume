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
    padding: 20px 10px;
    margin: 0 auto;
`

function Section(props) {
    const { themeName } = props
    const theme = getTheme(themeName)
    return (
        <Div textColor={ theme.TEXT } backgroundColor={ theme.BACKGROUND }>
            <DivInner>
                { props.children }
            </DivInner>
        </Div>
    )
}

Section.propTypes = {
    themeName: PropTypes.string,
}

export default Section