import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getAbout } from 'mockAPI'
import { updateAbout } from 'store/actions/aboutActions'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withAboutData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateAbout } = this.props
            if (!data.loaded) {
                getAbout().then(
                    aboutData => setTimeout(() => updateAbout(aboutData), 600)
                )
            }
        }

        render() {
            const { data } = this.props

            return (
                <Transition 
                    startComponent={ !data.loaded 
                        ? <Loading description="Waiting for about data..." /> 
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
            data: state.about,
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            updateAbout: (aboutData) => dispatch(updateAbout(aboutData))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
}