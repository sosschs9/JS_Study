import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Board from "./Board";

let Card = [];
for (let i = 0; i < 20; i++)
    Card.push("/image/card_back.png");

let array = [
    {
        name: 1,
        img: "/image/1.png"
    },
    {
        name: 2,
        img: "/image/2.png"
    },
    {
        name: 3,
        img: "/image/3.png"
    },
    {
        name: 4,
        img: "/image/4.png"
    },
    {
        name: 5,
        img: "/image/5.png"
    },
    {
        name: 6,
        img: "/image/6.png"
    },
    {
        name: 7,
        img: "/image/7.png"
    },
    {
        name: 8,
        img: "/image/8.png"
    },
    {
        name: 9,
        img: "/image/9.png"
    },
    {
        name: 10,
        img: "/image/10.png"
    }
];
array.sort(()=>0.5-Math.random());

function GameContainer() {
    const [images, setIamges] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(array);
    const [imgSrc, setImgSrc] = useState(Card);

    const handleClick = image => {
        const index = image.name;
        console.log(index);
        const img = "/image/" + index + ".png";
        setImgSrc(imgSrc => [
            ...imgSrc.slice(0, index-1),
            img,
            ...imgSrc.slice(index)
        ]);
        console.log(imgSrc);
    }

    return (
        <Container>
            <Board images={images} imgSrc={imgSrc} handleClick={handleClick}></Board>
        </Container>
    );
}

const Container = styled.div`
    width: 700px;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export default GameContainer;