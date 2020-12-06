import {CountryResponseDto} from '~/types/country';

export enum CountryTypes {
    FETCH_ALL_COUNTRY_REQUEST = 'country/FETCH_ALL_COUNTRY_REQUEST',
    FETCH_ALL_COUNTRY_SUCCESS = 'country/FETCH_ALL_COUNTRY_SUCCESS',
    FETCH_ALL_COUNTRY_FAILURE = 'country/FETCH_ALL_COUNTRY_FAILURE',
}

export interface FetchAllCountryAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST;
}

export interface FetchAllCountrySuccessAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS;
    payload: Array<CountryResponseDto>
}

export type CountryActionTypes = FetchAllCountryAction
| FetchAllCountrySuccessAction

export const fetchCountry = () => ({
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST
});

export const CountryActions = {
    fetchCountry
}