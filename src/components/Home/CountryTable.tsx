import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CountryDto, SortKeyTypes, SortDirectionTypes, ChangeSortDto } from '~/types/country';
import { RootState } from '~/store/reducers/index';
import { CountryActions } from '~/store/actions/country';
import { CountryState } from '~/store/reducers/country';

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
                top: 17px;
                right: 8px;
            }
            &:last-child{
                background: #000;
                color: #fff;
                font-size: 20px;
            }
        }
        & td {
            &.delete {
                cursor: pointer;
                background: #dd0000;
                color: #fff;
                &:hover{
                    background: #b40000;
                }
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

interface TableHeaderProps {
    sortDirection: SortDirectionTypes;
    sortKey: SortKeyTypes;
    changeSort(option: ChangeSortDto): void;
    showAddCountry(isShown: boolean): void;
}

interface TableRowProps extends CountryDto {
    deleteCountry(id: number): void;
}

interface TableContentProps {
    countryActions: typeof CountryActions;
    countryState: CountryState;
}

const TableHeader: React.FC<TableHeaderProps> = (props) => {
    const {sortDirection, sortKey} = props;
    const { changeSort, showAddCountry } = props;
    const headerData:Array<{name: string, key: SortKeyTypes}> = [
        {
            name: "코드",
            key: "alpha2Code"
        },
        {
            name: "이름",
            key: "name"
        },
        {
            name: "수도",
            key: "capital"
        },
        {
            name: "대륙",
            key: "region"
        },
        {
            name: "전화번호",
            key: "callingCodes"
        },
    ]
    const headerCols = headerData.map((col) =>{
        const renderIcon = col.key === sortKey ? (sortDirection === "ASC" ? <i className="fas fa-sort-up"/> : <i className="fas fa-sort-down"/>): null;
        
        const onHeaderClick = () => {
            if(col.key === sortKey){
                const direction = sortDirection === "ASC" ? "DESC" : "ASC";
                changeSort({sortKey: col.key, sortDirection: direction });
            }
            else{
                changeSort({sortKey: col.key, sortDirection:"ASC" });
            }
        }
        return(
            <th key={col.key} onClick={onHeaderClick}>
                <span>{col.name}</span>
                {renderIcon}
            </th>
        )
    })
    return(
        <thead>
            <tr>
                {headerCols}
                <th onClick={() => showAddCountry(true)}> + </th>
            </tr>
        </thead>
    )
}

const TableRow: React.FC<TableRowProps> = (props) => {
    const { id, alpha2Code, name, capital, region, callingCodes} = props;
    const { deleteCountry } = props;
    return(
        <tr>
            <td title={alpha2Code}>{alpha2Code}</td>
            <td title={name}>{name}</td>
            <td title={capital}>{capital}</td>
            <td title={region}>{region}</td>
            <td title={callingCodes}>{callingCodes}</td>
            <td className="delete" onClick={() => deleteCountry(id)}>X</td>
        </tr>
    )
}

const TableContent:React.FC<TableContentProps> = (props) => {
    const { countryState } = props;
    const { changeSort, deleteCountry, setCursor, showAddCountry } = props.countryActions;
    const { cursor, sortKey, sortDirection, search } = countryState;
    const countries = [...countryState.country];

    const renderCountries = countries.sort((a,b) => {
        if(sortDirection === "ASC"){
            return a[sortKey].localeCompare(b[sortKey]);
        } 
        return b[sortKey].localeCompare(a[sortKey]);
    }).filter((country) => {
        if(search === "") return true;
        const regExp = new RegExp(`^.*${search.toLowerCase()}.*$`);
        const isCodeMatch = country.alpha2Code.toLowerCase().replace(/ /g,"").match(regExp);
        if(isCodeMatch) return true;
        
        const isNameMatch = country.name.toLowerCase().replace(/ /g,"").match(regExp);
        if(isNameMatch) return true;
        
        const isCapitalMatch = country.capital.toLowerCase().replace(/ /g,"").match(regExp);
        if(isCapitalMatch) return true;

        const isRegionMatch = country.region.toLowerCase().replace(/ /g,"").match(regExp);
        if(isRegionMatch) return true;
        
        const isCallingMatch = country.callingCodes.toLowerCase().replace(/ /g,"").match(regExp);
        if(isCallingMatch) return true;
        
        return false;
    }).filter((country, idx) => idx < cursor);


    const handleScroll = () => {
        let currentScrollHeight = document.documentElement.scrollHeight;
        let currentScrollTop = document.documentElement.scrollTop;
        let currentClientHeight = document.documentElement.clientHeight;

        if(currentScrollHeight - currentScrollTop === currentClientHeight){
            if(renderCountries.length >= cursor){
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
    
    const tableRows = renderCountries.map((country) => <TableRow {...country} deleteCountry={deleteCountry} key={country.id}/>);

    return(
        <Wrapper>
            <table>
                <colgroup>
                    <col width="13%"/>
                    <col width="23%"/>
                    <col width="22%"/>
                    <col width="16%"/>
                    <col width="18%"/>
                    <col width="8%"/>
                </colgroup>
                <TableHeader {...countryState} changeSort= {changeSort} showAddCountry={showAddCountry}/>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </Wrapper>
    )
}

const mapStateToProps = (state: RootState) => ({
    countryState: state.country
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    countryActions: bindActionCreators(CountryActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableContent);