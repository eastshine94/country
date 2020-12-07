import React, { useState, MouseEvent, ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import { CountryState } from '~/store/reducers/country';
import { CountryActions } from '~/store/actions/country';
import { RootState } from '~/store/reducers/index';
import { CountryDto } from '~/types/country';

const Wrapper = styled.div`
    width: 50%;
    min-height: 95vh;
    padding: 20px 0px;
    border: 1px solid #dadada;
    @media only screen and (max-width: 800px){
        width: 98%;
    }
`;

const FormWrapper = styled.form`
    width: 100%;
    & label {   
        display: block;
        width: 80%;
        margin: 0 auto;
    }
    
    & label span, button {
        padding: 16px 5px;
        border: 1px solid #dadada;
    }
    & label {
        margin-bottom: 20px;
    }
    & label span {
        display: block;
        background-color: #fff;
        & input, select {
            border: none;
            width: 100%;
            outline: 0;
            padding: 0 15px;
        }
    }
    & label h3 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    & .btnBlock {
        display: flex;
        justify-content: center;

        & button {
            &.addBtn{
                background-color: #9f9fff; 
                margin-right: 20px;
                &:hover{
                    background-color: #7878ff; 
                }
            }

            display: block;
            width: 35%;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }
    }
    
    & p {
        color: red;
    }
`;

interface Props {
    countryState: CountryState;
    countryActions: typeof CountryActions
}


const AddCountry: React.FC<Props> = (props) => {
    const counties = props.countryState.country;
    const { showAddCountry, addCountry } = props.countryActions;
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [capital, setCapital] = useState("");
    const [region, setRegion] = useState("Asia");
    const [callNum, setCallNum] = useState("");

    const [ codeWarningMsg, setCodeWarningMsg] = useState("");
    const [ nameWarningMsg, setNameWarningMsg] = useState("");
    const [ capitalWarningMsg, setCapitalWarningMsg] = useState("");
    const [ callNumWarningMsg, setCallNumWarningMsg] = useState("");
    
    
    const onCodeChange = (event: ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const value = event.target.value;
        setCode(value);
    }

    const onNameChange = (event: ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const value = event.target.value;
        setName(value);
    }

    const onCapitalChange = (event: ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const value = event.target.value;
        setCapital(value);
    }
    const onRegionChange = (event: ChangeEvent<HTMLSelectElement>):void => {
        event.preventDefault();
        const value = event.target.value;
        setRegion(value);
    }
    const onCallNumChange = (event: ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const value = event.target.value;
        setCallNum(value);
    }
    
    const isMatchCode = (): boolean => {
        const regExp = /^[a-zA-Z]{2}$/
        const isMatch = code.match(regExp);
        return isMatch ? true : false;
    }

    const isMatchName = (): boolean => {
        const regExp = /^[a-zA-Z\s]+$/
        const isMatch = name.match(regExp);
        return isMatch ? true : false;
    }
    const isMatchCapital = (): boolean => {
        const regExp = /^[a-zA-Z\s]*$/
        const isMatch = capital.match(regExp);
        return isMatch ? true : false;
    }
    const isMatchCallNum = (): boolean => {
        const regExp = /^[0-9]*$/
        const isMatch = callNum.match(regExp);
        return isMatch ? true : false;
    }

    const isValidCode = (): boolean => {
        if(!isMatchCode()) {
            setCodeWarningMsg("2글자의 영문만 사용 가능합니다.");
            return false;
        }
        setCodeWarningMsg("");
        return true;
    }
    const isValidName = (): boolean => {
        const len = name.trim().length;
        if(len === 0 || !isMatchName()){
            setNameWarningMsg("1글자 이상의 영문을 입력해야 합니다.");
            return false;
        }
        setNameWarningMsg("");
        return true;
    }
    const isValidCapital = (): boolean => {
        if(!isMatchCapital()){
            setCapitalWarningMsg("영문, 공백만 입력할 수 있습니다.");
            return false;
        }
        setCapitalWarningMsg("");
        return true;
    }
    const isValidCallNum = (): boolean => {
        if(!isMatchCallNum()) {
            setCallNumWarningMsg("숫자만 입력하십시오.");
            return false;
        }
        setCallNumWarningMsg("")
        return true;
    }
    const onCodeBlur = (event: FocusEvent<HTMLInputElement>):void => {
        event.preventDefault();
        isValidCode();
    }
    const onNameBlur = (event: FocusEvent<HTMLInputElement>):void => {
        event.preventDefault();
        isValidName();
    }
    const onCapitalBlur = (event: FocusEvent<HTMLInputElement>):void => {
        event.preventDefault();
        isValidCapital();
    }
    const onCallNumBlur = (event: FocusEvent<HTMLInputElement>):void => {
        event.preventDefault();
        isValidCallNum();
    }
    const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        const validCode = isValidCode();
        const validName = isValidName();
        const validCapital = isValidCapital();
        const validCallNum = isValidCallNum()
        
        if( validCode && validName && validCapital && validCallNum ){    
            const check = confirm("추가하시겠습니까?");
            if(check){
                const country: CountryDto = {
                    id: counties[counties.length - 1].id + 1,
                    alpha2Code: code.trim().toUpperCase(),
                    name: name.trim(),
                    capital: capital.trim(),
                    region,
                    callingCodes: callNum.trim()
                }
                addCountry(country);
                alert("국가가 추가되었습니다.");
                showAddCountry(false);
            }    
        }
    
    }
    const onCancelClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const check = confirm("취소하시겠습니까?");
        if(check) {
            showAddCountry(false);
        }
         
    }
    return (
        <Wrapper>
            <FormWrapper>
                <label>
                    <h3>국가 코드 : </h3>
                    <span><input type="text" maxLength={2} onChange={onCodeChange} onBlur={onCodeBlur}/></span>
                    <p>{codeWarningMsg}</p>
                </label>
                <label>
                    <h3>국가명 : </h3>
                    <span><input type="text" onChange={onNameChange} onBlur={onNameBlur}/></span>
                    <p>{nameWarningMsg}</p>
                </label>
                <label>
                    <h3>수도 : </h3>
                    <span><input type="text" onChange={onCapitalChange} onBlur={onCapitalBlur}/></span>
                    <p>{capitalWarningMsg}</p>
                </label>
                <label>
                    <h3>대륙 : </h3>
                    <span>
                        <select onChange={onRegionChange}>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Ameticas">Ameticas</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Polar">Polar</option>
                        </select>
                    </span>
                </label>
                <label>
                    <h3>전화번호 : </h3>
                    <span><input type="text" onChange={onCallNumChange} onBlur={onCallNumBlur}/></span>
                    <p>{callNumWarningMsg}</p>
                </label>
                <div className="btnBlock">
                    <button className="addBtn" type="submit" onClick={onSubmit}>추가</button>
                    <button type="button" onClick={onCancelClick}>취소</button>
                </div>
            </FormWrapper>
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
)(AddCountry);