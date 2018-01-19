import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getSkills } from '../api'
import { updateSkills } from '../store/actions/skillsActions'

export function withSkillData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateSkills } = this.props
            if (!data.loaded) {
                getSkills().then(
                    skillData => setTimeout(() => updateSkills(skillData), 2000)
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
            data: state.skills,
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            updateSkills: (skillData) => dispatch(updateSkills(skillData))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
}