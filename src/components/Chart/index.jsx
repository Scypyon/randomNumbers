import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    font-size:1.7rem;
`

const Chart = ({task}) => {
    return ( 
        <Item>{task}</Item>
     );
}
 
export default Chart;