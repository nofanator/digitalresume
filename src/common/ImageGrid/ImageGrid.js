import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin: -5px;
`

const DivImageContainer = styled.div`
    padding: 5px;
    flex: 1 1 auto;
    text-align: center;

    span {
        display: block;
        margin-top: 6px;
        font-size: 0.9em;
        font-style: italic;
    }
`

const DivImage = styled.div`
    background-image: url(${props => props.imagePath});
    background-size: cover;
    background-position: center center;
    max-width: 100%;
    min-width: 200px;
    height: 200px;
`


function ImageGrid(props) {
    const { images } = props

    if (!images) {
        return null
    }

    if (images.length <= 0) {
        return null
    }

    return (
        <Div>
            {images.map((image, i) => {
                return (
                    <DivImageContainer key={`image-${i}`}>
                        <DivImage imagePath={ image.path } />
                    </DivImageContainer>
                )
            })}
        </Div>
    )
}

export default ImageGrid