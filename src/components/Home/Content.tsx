import React, { useState, useEffect } from 'react';
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
    const [cursor, setCursor] = useState(20);
    const renderCountries = countries.filter((country, idx) => idx < cursor);
    
    const handleScroll = () => {
        let currentScrollHeight = document.documentElement.scrollHeight;
        let currentScrollTop = document.documentElement.scrollTop;
        let currentClientHeight = document.documentElement.clientHeight;

        if(currentScrollHeight - currentScrollTop === currentClientHeight){
            if(countries.length >= cursor){
                setCursor(cursor + 20);
            }
        }
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll",handleScroll);
        }
    },[countries.length, cursor]);
    
    return(
        <Wrapper>
            <CountryTable countries={renderCountries}/>
        </Wrapper>
    )
}

export default Content;