import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.header`
    position: relative;
    width: 70%;
    border: 3px solid #4a26ff;
    border-radius: 10px;
    margin: 20px auto;
    padding: 5px;
    background: #fff;
    & input{
        width: 100%;
        border: none;
        outline: none;
        font-size: 20px;
    }
    @media only screen and (max-width: 1024px){
        width: 80%;
    }
    @media only screen and (max-width: 720px){
        width: 100%;
    }
`;
const Header:React.FC = () => {
    return(
        <Wrapper>
            <form>
                <input type="text" placeholder="검색어를 입력하세요."/>
            </form>
        </Wrapper>
    );
}

export default Header;