import React from 'react'
import Intro from './intro'

function introWithData(props) {

    // data would normally be fulfilled by am ajax call
    const data = {
        name: 'Name from data component',
        descr: 'this is a description',
    }

    // if loading return something else with a loading state

    return (
        <Intro {...data} />
        // <Intro name={data.name} descr={data.descr} />
    )
}

export default introWithData