import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

import store from "store"

import Intro from 'components/Intro'
import Education from 'components/Education'
import Experience from 'components/Experience'
import Skills from 'components/Skills'

import styled from 'styled-components'

const Div = styled.div`
    font-family: 'Inconsolata', monospace;
    font-size: 16px;

    h2 {
        margin: 0 0 16px;
    }
     
    h3 {
        margin: 12px 0;
    }
`

function App(props) {
    return (
        <Provider store={ store }>
            <Div>
                <Intro />
                <Education />
                <Skills />
                <Experience />
            </Div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))