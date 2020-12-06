import axios from 'axios';
import { API_HOST } from '~/constants';
import { ApiResponse } from '~/types/base';
import { CountryResponseDto } from '~/types/country';

export const fetchAllCountry = async() => {
    const countries: ApiResponse<Array<CountryResponseDto>> = await axios.get(API_HOST);
    return countries.data;
}