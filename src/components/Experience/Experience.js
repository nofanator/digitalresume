import React from 'react'
import Job from './components/Job'

function Experience(props) {
    const { experience } = props
    return (
        <div>
        <h2>Experience</h2>
        {experience.map((job, i) =>
            <Job key={`job-${i}`} job={ job } />
        )}
        </div>
    )
}

export default Experience