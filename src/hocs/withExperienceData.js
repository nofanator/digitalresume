import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getExperience } from '../api'
import { updateExperience } from '../store/actions/experienceActions'

export function withExpierenceData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateExperience } = this.props
            if (!data.loaded) {
                getExperience().then(
                    experienceData => setTimeout(() => updateExperience(experienceData), 2000)
                )
            }
        }

        render() {
            const { data } = this.props

            if (!data.loaded) {
                return <span>Loading...</span>
            }

            return (<Wrapper {...data} />)
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