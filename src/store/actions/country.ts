import {CountryResponseDto} from '~/types/country';

export enum CountryTypes {
    FETCH_ALL_COUNTRY_REQUEST = 'country/FETCH_ALL_COUNTRY_REQUEST',
    FETCH_ALL_COUNTRY_SUCCESS = 'country/FETCH_ALL_COUNTRY_SUCCESS',
    FETCH_ALL_COUNTRY_FAILURE = 'country/FETCH_ALL_COUNTRY_FAILURE',
}

export interface FetchAllCountryRequestAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST;
}

export interface FetchAllCountrySuccessAction {
    type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS;
    payload: Array<CountryResponseDto>
}

export type CountryActionTypes = FetchAllCountryRequestAction
| FetchAllCountrySuccessAction

export const FetchCountry = () => ({
    type: CountryTypes.FETCH_ALL_COUNTRY_REQUEST
})