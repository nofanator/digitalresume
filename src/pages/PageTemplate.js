import React from 'react'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
    body {
        background-color: #000;
        color: #fff;
        height: 100%;
        width: 100%;

        font-family: 'Inconsolata', monospace;
        font-size: 16px;
        line-height: 1.2;
    
        h1, h2 {
            font-family: 'Play', sans-serif;
            font-weight: 700;
            margin: 0 0 20px;
            line-height: 1;
        }
    
        h2 {
            margin: 0 0 16px;
        }
         
        h3 {
            margin: 0 0 12px;
            font-weight: 700;
        }
    
        a {
            text-decoration: underline;
            text-transform: uppercase;
            cursor: pointer;
            color: inherit;
            font-weight: 700;
        }
    }
`

const Div = styled.div`

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