import React, { Component } from 'react'
import { getExperienceById } from 'mockAPI'

import Transition from 'common/Transition'
import Loading from 'common/Loading'

export function withExperienceDetailData(experienceId) {
    return (Wrapper) => {
        return class dataProvider extends Component {
            constructor() {
                super()
                this.state = {
                    data: null
                }
            }

            componentDidMount() {
                getExperienceById(experienceId).then(
                    detailData => setTimeout(
                        () => this.setState({ data: detailData }), 
                        1200
                    )
                )
            }
    
            render() {
                const { data } = this.state
    
                return (
                    <Transition 
                        startComponent={ 
                            <Loading description="Loading experience data, How slow can we go?" /> 
                        }
                        endComponent={ data 
                            ? <Wrapper {...data} />
                            : null
                        } 
                    />
                )
            }
        }
    }
}