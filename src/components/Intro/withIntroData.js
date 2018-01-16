import React from 'react'

export function withIntroData(Wrapper) {
    const data = {
        name: 'Name from data component',
        descr: 'this is a description',
    }

    return (props) => <Wrapper {...data} />
}
