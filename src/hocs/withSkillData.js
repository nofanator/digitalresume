import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getSkills } from 'mockAPI'
import { updateSkills } from 'store/actions/skillsActions'


import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withSkillData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateSkills } = this.props
            if (!data.loaded) {
                getSkills().then(
                    skillData => setTimeout(() => updateSkills(skillData), 1500)
                )
            }
        }

        render() {
            const { data } = this.props

            return (
                <Transition 
                    startComponent={ 
                        <Loading description="Loading skill data... a little bit slower now." /> 
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