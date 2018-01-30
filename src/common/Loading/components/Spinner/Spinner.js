import React from 'react'

import styled, { keyframes } from 'styled-components'

const CubeLoader = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    margin: 20px auto 40px;
`

const moveCube = keyframes`
    25% { 
        transform: translateX(42px) rotate(-90deg) scale(0.5);
    } 50% { 
        transform: translateX(42px) translateY(42px) rotate(-179deg);
    } 50.1% { 
        transform: translateX(42px) translateY(42px) rotate(-180deg);
    } 75% { 
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    } 100% { 
        transform: rotate(-360deg);
    }
`

const Cube = styled.div`
    background-color: #fff;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${moveCube} 1.8s infinite ease-in-out;
`

const SecondCube = Cube.extend`
    animation-delay: -0.9s;
`;

function Spinner(props) {
    return (
        <CubeLoader>
            <Cube />
            <SecondCube />
        </CubeLoader>
    )
}

export default Spinner