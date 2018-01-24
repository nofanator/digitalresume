import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    margin-bottom: 12px;
`

function Achievements(props) {
    const { list } = props
    return (
        <ul>
            {list.map((item, i) => 
                <Li key={`achievements-${i}`}>{ item }</Li>
            )}
        </ul>
    )
}

export default Achievements