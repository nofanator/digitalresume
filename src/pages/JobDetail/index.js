import React from 'react'
import JobDetail from './JobDetail'
import { withExperienceDetailData } from 'hocs/withExperienceDetailData'

function JobDetailWithData(props) {

    const { match } = props
    const id = match.params.id

        
    const WithData = withExperienceDetailData(id)(JobDetail)

    return (
        <WithData />
    )
}

export default JobDetailWithData