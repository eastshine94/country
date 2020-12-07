import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '~/store/reducers/index';
import { CountryActions } from '~/store/actions/country';
import { CountryState } from '~/store/reducers/country';

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

interface Props {
    countryState: CountryState;
    countryActions: typeof CountryActions;
}

const Header:React.FC<Props> = (props) => {
    const { search } = props.countryState;
    const { setSearch } = props.countryActions;
    
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const val = event.target.value;
        setSearch(val);
    }

    useEffect(()=>{
        return(() => {
            setSearch("");
        })
    },[]);
    
    return(
        <Wrapper>
            <input value={search} onChange={onSearchChange} type="text" placeholder="검색어를 입력하세요."/>
        </Wrapper>
    );
}

const mapStateToProps = ( state: RootState ) => ({
    countryState: state.country
})

const mapDispatchToProps = ( dispatch: Dispatch ) => ({
    countryActions: bindActionCreators(CountryActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);