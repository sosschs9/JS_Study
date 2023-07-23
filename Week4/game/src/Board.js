import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Board({images, imgSrc, handleClick}) {
    return (
        <Container>
            {images.map((image, index) => (
                <Card image={image} imgSrc={imgSrc} key={index} handleClick={handleClick}></Card>
            ))}
            {images.map((image, index) => (
                <Card image={image} imgSrc={imgSrc} key={index} handleClick={handleClick}></Card>
            ))}
        </Container>
    )
}

const Container = styled.div`
  width: 470px;
  height: 860px;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export default Board;