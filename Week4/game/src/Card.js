import React from "react";
import styled from "styled-components";

function Cell({image, imgSrc, handleClick}) {
  return <Container id={image.name} src={imgSrc[image.name-1]} onClick={() => handleClick(image)}/>;
}

const Container = styled.img`
    width: 95px;
    height: 150px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`;

export default Cell;