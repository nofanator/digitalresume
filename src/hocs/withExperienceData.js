import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getExperience } from 'mockAPI'
import { updateExperience } from 'store/actions/experienceActions'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withExpierenceData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateExperience } = this.props
            if (!data.loaded) {
                getExperience().then(
                    experienceData => setTimeout(() => updateExperience(experienceData), 3000)
                )
            }
        }

        render() {
            const { data } = this.props

            return (
                <Transition 
                    startComponent={ !data.loaded 
                        ? <Loading description="Loading experience data, How slow can we go?" /> 
                        : null
                    }
                    endComponent={ data.loaded 
                        ? <Wrapper {...data} />
                        : null
                    } 
                />
            )
        }
    }

    function mapStateToProps(state) {
        return {
            data: state.experience,
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            updateExperience: (experienceData) => dispatch(updateExperience(experienceData))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
}