import React from 'react'

import Intro from 'components/Intro'
import Education from 'components/Education'
import Experience from 'components/Experience'
import Skills from 'components/Skills'
import About from 'components/About'

import PageTemplate from '../PageTemplate'

function Home(props) {
    return (
        <PageTemplate>
            <Intro />
            <Education />
            <Skills />
            <Experience />
            <About />
        </PageTemplate>
    )
}

export default Home