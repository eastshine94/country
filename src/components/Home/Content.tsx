import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.main`
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
        & th {
            position: relative;
            cursor: pointer;
            & i {
                position: absolute;
                top: 10px;
                right: 8px;
            }
            &:last-child{
                cursor: auto;
            }
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
    @media only screen and (max-width: 720px){
        & th {
            & i {
                display: none;
            }
        }
    }
`;

interface TableRowProps {
    alpha2Code: string;
    name: string;
    capital: string;
    region: string;
    callingCodes: string;
}

const TableHeader: React.FC = () => {
    return(
        <thead>
            <tr>
                <th>
                    <span>코드</span>
                    <i className="fas fa-sort-down"/>
                    <i className="fas fa-sort-up"/>
                </th>
                <th>
                    <span>이름</span>
                    <i className="fas fa-sort-down"/>
                    <i className="fas fa-sort-up"/> 
                </th>
                <th>
                    <span>수도</span>
                    <i className="fas fa-sort-down"/>
                    <i className="fas fa-sort-up"/>
                </th>
                <th>
                    <span>대륙</span>
                    <i className="fas fa-sort-down"/>
                    <i className="fas fa-sort-up"/>
                </th>
                <th>
                    <span>전화번호</span>
                    <i className="fas fa-sort-down"/>
                    <i className="fas fa-sort-up"/>
                </th>
                <th/>
            </tr>
        </thead>
    )
}

const TableRow: React.FC<TableRowProps> = (props) => {
    const {alpha2Code, name, capital, region, callingCodes} = props
    return(
        <tr>
            <td>{alpha2Code}</td>
            <td>{name}</td>
            <td>{capital}</td>
            <td>{region}</td>
            <td>{callingCodes}</td>
            <td>삭제</td>
        </tr>
    )
}
const Content: React.FC = () => {
    return(
        <Wrapper>
                <table>
                    <colgroup>
                        <col width="10%"/>
                        <col width="23%"/>
                        <col width="23%"/>
                        <col width="16%"/>
                        <col width="18%"/>
                        <col width="10%"/>
                    </colgroup>
                    <TableHeader/>
                    <tbody>
                        <TableRow alpha2Code="AF" name="Afghanistan" capital="Kabul" region="Americas" callingCodes="355"/>
                        <TableRow alpha2Code="AF" name="Afghanistan" capital="Kabul" region="Americas" callingCodes="355"/>
                    </tbody>
                </table>
            </Wrapper>
    )
}

export default Content;