import axios from 'axios';
import { API_HOST } from '~/constants';
import { CountryResponseDto } from '~/types/country';

export const fetchAllCountry = async() => {
    const countries: CountryResponseDto = await axios.get(API_HOST);
    return countries;
}