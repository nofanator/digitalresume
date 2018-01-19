import React from 'react'

function Achievements(props) {
    const { list } = props
    return (
        <ul>
            {list.map((item, i) => 
                <li key={`achievements-${i}`}>{ item }</li>
            )}
        </ul>
    )
}

export default Achievements