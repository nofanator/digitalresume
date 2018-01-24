import React from 'react' 
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleInner = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function JobTitle(props) {
    const { employer, title } = props
    return (
        <h3>
            <TitleInner>
                { employer }
                <span>{ title }</span>
            </TitleInner>
        </h3>
    )
}

JobTitle.propTypes = {
    employer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default JobTitle