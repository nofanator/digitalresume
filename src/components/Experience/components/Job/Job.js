import React from 'react'
import Achievements from './components/Achievements'

function Job(props) {
    const { job } = props

    return (
        <section>
            <span>{`${job.start} - ${job.end}`}</span>
            <h3>
                { job.employer }
                <span>{ job.title }</span>
            </h3>
            <p>{ job.summary }</p>
            <Achievements list={ job.achievements } />
        </section>
    )
}

export default Job