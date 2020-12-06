import {CountryResponseDto} from '~/types/country';
import { CountryTypes, CountryActionTypes } from '~/store/actions/country';



export interface CountryState {
    country: Array<CountryResponseDto>
}

const initialState: CountryState  = {
    country: [],
}

const countryReducer = (state=initialState, action: CountryActionTypes) => {
    switch(action.type){
        case CountryTypes.FETCH_ALL_COUNTRY_SUCCESS :
            return{
                ...state,
                country: action.payload
            }
        default : 
            return state
    }
}

export default countryReducer;