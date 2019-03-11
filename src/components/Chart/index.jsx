import React from "react";
import styled from "styled-components";

const Item = styled.div`
  :nth-child(odd) {
    background-color: #00b7eb;
  }
  :nth-child(even) {
    background-color: #0084b8;
  }
  width: 0.895vw;
  height: ${({ count }) => count * 0.29833}vh;
  background-color: green;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: ${({ position }) => position * 0.895}vw;
  border: 1px solid #000;
`;

const Chart = ({ number, position }) => {
  return <Item count={number} position={position} />;
};

export default Chart;
