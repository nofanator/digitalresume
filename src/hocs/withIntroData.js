import React, { Component } from 'react'
import { connect } from "react-redux" 
import { getIntro } from 'mockAPI'
import { updateIntro } from 'store/actions/introActions'

export function withIntroData(Wrapper) {
    class dataProvider extends Component {
        /* Fetch and cache data if not loaded */
        componentWillMount() {
            const { data, updateIntro } = this.props
            if (!data.loaded) {
                getIntro().then(
                    introData => setTimeout(() => updateIntro(introData), 1000)
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