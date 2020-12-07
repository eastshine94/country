import React from 'react';
import styled from 'styled-components';
import Portal from '~/pages/Modal';
import AddCountry from '~/components/Home/AddCountry';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    width: 100%;
    height: 100vh;
    background-color: #f5f6f7;
    z-index: 100;
`;

const AddCountryContainer:React.FC = () => {
    return(
        <Portal>
            <Wrapper>
                <AddCountry/>
            </Wrapper>
        </Portal>
    )
}

export default AddCountryContainer