import React from 'react'
import ReactDOM from 'react-dom'

import Intro from './components/intro'
import Education from './components/education'
import Experience from './components/experience'
import Skills from './components/skills'

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