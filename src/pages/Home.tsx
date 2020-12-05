import React from 'react';
import styled from 'styled-components';
import { HomeContainer } from '~/containers';
const Wrapper = styled.div`
    width: 100%;
`

const Home:React.FC = () => {
    return(
        <Wrapper>
            <HomeContainer/>
        </Wrapper>
    )
}

export default Home;