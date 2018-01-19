import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

import store from "./store"

import Intro from './components/Intro'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App(props) {
    return (
        <Provider store={ store }>
            <div>
                <Intro />
                <Education />
                <Skills />
                <Experience />
            </div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))