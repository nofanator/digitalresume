import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    font-family: 'Inconsolata', monospace;
    font-size: 16px;
    line-height: 20px;

    h1, h2 {
        font-family: 'Play', sans-serif;
        font-weight: 700;
        margin: 20px 0;
    }

    h2 {
        margin: 0 0 16px;
    }
     
    h3 {
        margin: 12px 0;
        font-weight: 700;
    }

    a {
        text-decoration: underline;
        text-transform: uppercase;
        cursor: pointer;
        color: inherit;
    }
`

function PageTemplate(props) {
    const { children } = props
    return (
        <Div>
            { children }
        </Div>
    )
}

export default PageTemplate