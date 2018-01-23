import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`
const Li = styled.li`
    display: flex;
    align-items: center;
`

const Sep = styled.span`
    display: inline-block;
    margin: 0 6px;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 1rem;
`

function SkillsSection(props) {
    const { section } = props
    const { list } = section
    return (
        <div>
            <h3>{ section.title }</h3>
            {list && list.length > 0 &&
                <Ul>
                    {list.map((skill, i) => 
                        <Li key={`skill-item-${i}`}>
                            <Sep>&bull;</Sep>
                            { skill }
                        </Li>
                    )}
                </Ul>
            }
        </div>
    )
}

export default SkillsSection