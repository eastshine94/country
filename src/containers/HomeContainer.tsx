import React from 'react';
import styled from 'styled-components';
import { Header, Content } from '~/components/Home';

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const HomeContainer = () => {
    return(
        <Wrapper>
            <Header/>
            <Content/>
        </Wrapper>
    )
}

export default HomeContainer