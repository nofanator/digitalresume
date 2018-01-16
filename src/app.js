import React from 'react'
import ReactDOM from 'react-dom'

import Intro from './components/Intro'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App(props) {
    return (
        <div>
            <Intro />
            <Education />
            <Skills />
            <Experience />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))