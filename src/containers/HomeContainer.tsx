import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Content } from '~/components/Home';
import { RootState } from '~/store/reducers/index';
import { CountryActions } from '~/store/actions/country';
import { CountryState } from '~/store/reducers/country';
import AddCountryContainer from './AddCountryContainer';

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

interface Props {
    countryActions: typeof CountryActions;
    countryState: CountryState;
}
const HomeContainer:React.FC<Props> = (props) => {
    const {isShownAddCountry} = props.countryState;
    const { fetchCountry, showAddCountry } = props.countryActions;
    useEffect(() => {
        fetchCountry();
        return (() => {
            showAddCountry(false);
        });
    },[]);
    
    return(
        <Wrapper>
            {isShownAddCountry ? <AddCountryContainer/> : null}
            <Header/>
            <Content/>
        </Wrapper>
    )
}

const mapStateToProps = (state: RootState) => ({
    countryState: state.country
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    countryActions: bindActionCreators(CountryActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);