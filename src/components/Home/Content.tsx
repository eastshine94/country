import React from 'react';
import styled from 'styled-components';
import { CountryResponseDto } from '~/types/country';
import CountryTable from './CountryTable';
const Wrapper = styled.main`
    margin: 30px auto;
    width: 90%;
`;

interface Props {
    countries: Array<CountryResponseDto>
}

const Content: React.FC<Props> = (props) => {
    const {countries} = props;
    return(
        <Wrapper>
            <CountryTable countries={countries}/>
        </Wrapper>
    )
}

export default Content;