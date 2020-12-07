import React from 'react';
import styled from 'styled-components';
import { CountryResponseDto } from '~/types/country';

const Wrapper = styled.section`
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
        & td {
            &.delete {
                cursor: pointer;
                background: #dd0000;
                color: #fff;
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

interface TableContentProps {
    countries: Array<CountryResponseDto>
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
            <td title={alpha2Code}>{alpha2Code}</td>
            <td title={name}>{name}</td>
            <td title={capital}>{capital}</td>
            <td title={region}>{region}</td>
            <td title={callingCodes}>{callingCodes}</td>
            <td className="delete">X</td>
        </tr>
    )
}

const TableContent:React.FC<TableContentProps> = (props) => {
    const {countries} = props;
    const tableRows = countries.map((country, idx) => <TableRow {...country} callingCodes={country.callingCodes[0]} key={idx}/>)
    return(
        <Wrapper>
            <table>
                <colgroup>
                    <col width="10%"/>
                    <col width="28%"/>
                    <col width="22%"/>
                    <col width="16%"/>
                    <col width="18%"/>
                    <col width="6%"/>
                </colgroup>
                <TableHeader/>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default TableContent;