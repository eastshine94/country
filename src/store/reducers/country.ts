import { CountryDto, SortDirectionTypes, SortKeyTypes } from '~/types/country';
import { CountryTypes, CountryActionTypes } from '~/store/actions/country';



export interface CountryState {
    country: Array<CountryDto>;
    sortKey: SortKeyTypes;
    sortDirection: SortDirectionTypes;
}

const initialState: CountryState  = {
    country: [],
    sortKey: "name",
    sortDirection: "ASC"
}

const countryReducer = (state=initialState, action: CountryActionTypes) => {
    switch(action.type){
        case CountryTypes.FETCH_ALL_COUNTRY_SUCCESS :
            return{
                ...state,
                country: action.payload
            }
        case CountryTypes.CHANGE_SORT:
            return {
                ...state,
                sortKey: action.payload.sortKey,
                sortDirection: action.payload.sortDirection
            }
        case CountryTypes.DELETE_COUNTRY:
            const idx = action.payload;
            const prevCountry = state.country.slice(0, idx);
            const afterCountry = state.country.slice(idx+1);
            return{
                ...state,
                country: [...prevCountry, ...afterCountry]
            }
        default : 
            return state
    }
}

export default countryReducer;