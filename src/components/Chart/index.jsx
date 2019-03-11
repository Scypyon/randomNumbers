import React from "react";
import styled from "styled-components";

const Item = styled.div`
  :nth-child(odd) {
    background-color: #00b7eb;
  }
  :nth-child(even) {
    background-color: #0084b8;
  }
  height: 89.5vh;
  width: 0.895vw;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: -89.5vh;;
  left: ${({ position }) => position * 0.895}vw;
  border: 1px solid #000;
  transition: transform 0.5s, height 0.5s;
`;

const Chart = ({ number, position, length }) => {
  return (
    <Item
      style={{
        transform: `translateY(-${(number * 8.95) / (length)}vh)`
      }}
      position={position}
    />
  );
};

export default Chart;
