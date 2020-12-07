import { CountryDto, ChangeSortDto } from '~/types/country';

export enum CountryTypes {
    FETCH_ALL_COUNTRY_REQUEST = 'country/FETCH_ALL_COUNTRY_REQUEST',
    FETCH_ALL_COUNTRY_SUCCESS = 'country/FETCH_ALL_COUNTRY_SUCCESS',
    FETCH_ALL_COUNTRY_FAILURE = 'country/FETCH_ALL_COUNTRY_FAILURE',
    SET_CURSOR  = 'country/SET_CURSOR',
    CHANGE_SORT = 'country/CHANGE_SORT',
    DELETE_COUNTRY = 'country.DELETE_COUNTRY',
}

export interface FetchAllCountryAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST;
}

export interface FetchAllCountrySuccessAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS;
    payload: Array<CountryDto>
}

export interface SetCursorAction {
    type: CountryTypes.SET_CURSOR;
    payload: number;
}

export interface ChangeSortAction {
    type: CountryTypes.CHANGE_SORT;
    payload: ChangeSortDto;
}

export interface DeleteCountryAction {
    type: CountryTypes.DELETE_COUNTRY;
    payload: number;
}

export type CountryActionTypes = FetchAllCountryAction
| FetchAllCountrySuccessAction
| SetCursorAction
| ChangeSortAction
| DeleteCountryAction

export const fetchCountry = () => ({
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST
});

export const setCursor = (cursor: number) => ({
    type: CountryTypes.SET_CURSOR,
    payload: cursor
})

export const changeSort = (option: ChangeSortDto) => ({
    type: CountryTypes.CHANGE_SORT,
    payload: option
});

export const deleteCountry = (idx: number) => ({
    type: CountryTypes.DELETE_COUNTRY,
    payload: idx
})

export const CountryActions = {
    fetchCountry,
    setCursor,
    changeSort,
    deleteCountry
}