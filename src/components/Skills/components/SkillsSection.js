import React from 'react'
import styled from 'styled-components'
import HorizontalList from 'common/HorizontalList'

function SkillsSection(props) {
    const { section } = props
    const { list } = section
    return (
        <div>
            <h3>{ section.title }</h3>
            <HorizontalList listKey="skill" list={ list } />
        </div>
    )
}

export default SkillsSection