import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getIntro } from 'mockAPI'
import { updateIntro } from 'store/actions/introActions'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withIntroData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateIntro } = this.props
            if (!data.loaded) {
                getIntro().then(
                    introData => setTimeout(() => updateIntro(introData), 400)
                )
            }
        }

        render() {
            const { data } = this.props

            return (
                <Transition 
                    startComponent={ !data.loaded
                        ? <Loading description="Waiting for intro data..." /> 
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
            data: state.intro,
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            updateIntro: (introData) => dispatch(updateIntro(introData))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(dataProvider)
}