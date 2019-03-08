import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    position:absolute;
    bottom:-5vh;
    width:1vw;
    height:8vh;
    background-color: green;
`

const Chart = () => {
    return ( 
        <Item></Item>
     );
}
 
export default Chart;