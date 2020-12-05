import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Header = styled.header`
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

const Content = styled.main`
    margin: auto;
    width: 80%;
    & table{
        width: 100%;
        text-align: center;
        border: 1px solid #000;
        border-collapse: collapse;
        table-layout: fixed;
        & td, th {
            border: 1px solid #000;
            padding: 8px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 13px;
        }
        & thead tr {
            background-color: #9f9fff;
        }
        & tbody tr {
            &:nth-child(2n){
                background-color: #d5d5ff;
            }
        }
    }
    @media only screen and (max-width: 1024px){
        width: 100%;
    }
`;
const HomeContainer = () => {
    return(
        <Wrapper>
            <Header>
                <form>
                    <input type="text" placeholder="검색어를 입력하세요."/>
                </form>
            </Header>
            <Content>
                <table>
                    <colgroup>
                        <col width="10%"/>
                        <col width="23%"/>
                        <col width="23%"/>
                        <col width="16%"/>
                        <col width="18%"/>
                        <col width="10%"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>코드</th>
                            <th>이름</th>
                            <th>수도</th>
                            <th>대륙</th>
                            <th>전화번호</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>855</td>
                            <td>Afghanistan</td>
                            <td>Kabul</td>
                            <td>Asia</td>
                            <td>355</td>
                            <td>삭제</td>
                        </tr>
                        <tr>
                            <td>855</td>
                            <td>Afghanistan</td>
                            <td>Kabul</td>
                            <td>Americas</td>
                            <td>355</td>
                            <td>삭제</td>
                        </tr>
                        <tr>
                            <td>855</td>
                            <td>Afghanistan</td>
                            <td>Kabul</td>
                            <td>Asia</td>
                            <td>355</td>
                            <td>삭제</td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </Wrapper>
    )
}

export default HomeContainer