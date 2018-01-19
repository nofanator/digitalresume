import React from 'react'
import SkillsSection from './components/SkillsSection'

function Skills(props) {

    const { skills } = props
    if (!skills) {
        return null
    }

    if (skills.length <= 0) {
        return null
    }


    return (
        <div>
            <h2>Skills</h2>
            {skills.map((section, i) => 
                <SkillsSection 
                    key={`skills-sect-${i}`} 
                    section={ section } 
                />
            )}
        </div>
    )
}

export default Skills