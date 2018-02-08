import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getExperienceById } from 'mockAPI'
import { updateJobDetail } from 'store/actions/experienceActions'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withExperienceDetailData(experienceId) {
    return (WrappedComponent) => {
        class dataProvider extends Component {
            componentDidMount() {
                const { updateJobDetail, data } = this.props

                if (!data) {
                    getExperienceById(experienceId).then(
                        detailData => setTimeout(
                            () => updateJobDetail(detailData), 
                            1200
                        )
                    )
                }
            }
    
            render() {
                const { data } = this.props
    
                return (
                    <Transition 
                        startComponent={ !data 
                            ? <Loading description="Loading experience detail data..." /> 
                            : null
                        }
                        endComponent={ data 
                            ? <WrappedComponent {...data} />
                            : null
                        } 
                    />
                )
            }
        }

        function mapStateToProps(state) {
            const detailArray = state.experience.jobDetail

            return {
                data: detailArray.length > 0
                    ? detailArray.find(x => x.id == experienceId)
                    : null
            }
        }
        
        function mapDispatchToProps(dispatch) {
            return {
                updateJobDetail: (detailData) => dispatch(updateJobDetail(detailData))
            }
        }
    
        return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
    }
}