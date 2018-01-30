import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getEducation } from 'mockAPI'
import { updateEducation } from 'store/actions/educationActions'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withEducationData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateEducation } = this.props
            if (!data.loaded) {
                getEducation().then(
                    data => setTimeout(() => updateEducation(data), 400)
                )
            }
        }

        render() {
            const { data } = this.props

            return (
                <Transition 
                    startComponent={ !data.loaded 
                        ? <Loading description="Waiting for education data..." /> 
                        : null
                    }
                    endComponent={ data.loaded 
                        ? <Wrapper {...this.props} {...data} />
                        : null
                    } 
                />
            )
        }
    } 

    function mapStateToProps(state) {
        return {
            data: state.education,
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            updateEducation: (data) => dispatch(updateEducation(data))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
}