import React from 'react'

function SkillsSection(props) {
    const { section } = props
    const { list } = section
    return (
        <div>
            <h3>{ section.title }</h3>
            {list && list.length > 0 &&
                <ul>
                    {list.map((skill, i) => 
                        <li key={`skill-item-${i}`}>
                            { skill }
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default SkillsSection