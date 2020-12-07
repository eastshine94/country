import React from 'react';
import styled from 'styled-components';
import CountryTable from './CountryTable';

const Wrapper = styled.main`
    margin: 30px auto;
    width: 90%;
`;


const Content: React.FC= () => {
    
    return(
        <Wrapper>
            <CountryTable/>
        </Wrapper>
    )
}

export default Content;