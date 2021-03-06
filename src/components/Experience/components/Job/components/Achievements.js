import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    margin: 0;
    padding-left: 16px;
`

const Li = styled.li`
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0;
    }
`

function Achievements(props) {
    const { list } = props
    return (
        <Ul>
            {list.map((item, i) => 
                <Li key={`achievements-${i}`}>{ item }</Li>
            )}
        </Ul>
    )
}

export default Achievements