import { CountryDto, ChangeSortDto } from '~/types/country';

export enum CountryTypes {
    FETCH_ALL_COUNTRY_REQUEST = 'country/FETCH_ALL_COUNTRY_REQUEST',
    FETCH_ALL_COUNTRY_SUCCESS = 'country/FETCH_ALL_COUNTRY_SUCCESS',
    FETCH_ALL_COUNTRY_FAILURE = 'country/FETCH_ALL_COUNTRY_FAILURE',
    SET_CURSOR = 'country/SET_CURSOR',
    SET_SEARCH = 'country/SET_SEARCH',
    CHANGE_SORT = 'country/CHANGE_SORT',
    SHOW_ADD_COUNTRY = 'country/SHOW_ADD_COUNTRY',
    ADD_COUNTRY = 'country/ADD_COUNTRY',
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

export interface SetSearchAction {
    type: CountryTypes.SET_SEARCH;
    payload: string;
}

export interface ChangeSortAction {
    type: CountryTypes.CHANGE_SORT;
    payload: ChangeSortDto;
}

export interface ShowAddCountryAction {
    type: CountryTypes.SHOW_ADD_COUNTRY;
    payload: boolean
}

export interface AddCountryAction {
    type: CountryTypes.ADD_COUNTRY;
    payload: CountryDto;
}

export interface DeleteCountryAction {
    type: CountryTypes.DELETE_COUNTRY;
    payload: number;
}

export type CountryActionTypes = FetchAllCountryAction
| FetchAllCountrySuccessAction
| SetCursorAction
| SetSearchAction
| ChangeSortAction
| ShowAddCountryAction
| AddCountryAction
| DeleteCountryAction

export const fetchCountry = () => ({
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST
});

export const setCursor = (cursor: number) => ({
    type: CountryTypes.SET_CURSOR,
    payload: cursor
});

export const setSearch = (search: string) => ({
    type: CountryTypes.SET_SEARCH,
    payload: search
})

export const changeSort = (option: ChangeSortDto) => ({
    type: CountryTypes.CHANGE_SORT,
    payload: option
});

export const showAddCountry = (isShown: boolean) => ({
    type: CountryTypes.SHOW_ADD_COUNTRY,
    payload: isShown
})

export const addCountry = (country: CountryDto) => ({
    type: CountryTypes.ADD_COUNTRY,
    payload: country
})

export const deleteCountry = (idx: number) => ({
    type: CountryTypes.DELETE_COUNTRY,
    payload: idx
})

export const CountryActions = {
    fetchCountry,
    setCursor,
    setSearch,
    changeSort,
    showAddCountry,
    addCountry,
    deleteCountry
}