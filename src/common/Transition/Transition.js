import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from { 
        visibility: hidden;
        opacity: 0; 
    }

    to { 
        visibility: visible;
        opacity: 1; 
    }
`

const fadeOut = keyframes`
    from { 
        visibility: visible;
        opacity: 1; 
    }

    to {
        visibility: hidden;
        opacity: 0; 
    }
`

const Div = styled.div`
    position: relative;
`

const DivStart = styled.div`
    position: absolute;
    width: 100%;

    animation-name: ${fadeOut};
    animation-duration: ${props => props.duration};
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
`

const DivEnd = styled.div`
    animation-name: ${fadeIn};
    animation-duration: ${props => props.duration};
    animation-timing-function: east-in;
    animation-delay:  ${props => props.duration};
    animation-fill-mode: backwards;
`

class Transition extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { startComponent, endComponent } = this.props
        
        if (!endComponent) {
            return startComponent
        }

        const duration = '0.25s'

        return (
            <Div>
                <DivStart duration={ duration } className="test">
                    { startComponent }
                </DivStart>
                <DivEnd duration={ duration }>
                    { endComponent }
                </DivEnd>
            </Div>
        )
    }

}

Transition.propTypes = {
    startComponent: PropTypes.element.isRequired,
    endComponent: PropTypes.element,
}

export default Transition