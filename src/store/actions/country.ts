import { CountryDto, ChangeSortDto } from '~/types/country';

export enum CountryTypes {
    FETCH_ALL_COUNTRY_REQUEST = 'country/FETCH_ALL_COUNTRY_REQUEST',
    FETCH_ALL_COUNTRY_SUCCESS = 'country/FETCH_ALL_COUNTRY_SUCCESS',
    FETCH_ALL_COUNTRY_FAILURE = 'country/FETCH_ALL_COUNTRY_FAILURE',
    CHANGE_SORT = 'country/CHANGE_SORT',
}

export interface FetchAllCountryAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST;
}

export interface FetchAllCountrySuccessAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS;
    payload: Array<CountryDto>
}

export interface ChangeSortAction {
    type: CountryTypes.CHANGE_SORT;
    payload: ChangeSortDto;
}

export type CountryActionTypes = FetchAllCountryAction
| FetchAllCountrySuccessAction
| ChangeSortAction

export const fetchCountry = () => ({
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST
});

export const changeSort = (option: ChangeSortDto) => ({
    type: CountryTypes.CHANGE_SORT,
    payload: option
});

export const CountryActions = {
    fetchCountry,
    changeSort
}