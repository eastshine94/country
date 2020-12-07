import { CountryDto, SortDirectionTypes, SortKeyTypes } from '~/types/country';
import { CountryTypes, CountryActionTypes } from '~/store/actions/country';



export interface CountryState {
    country: Array<CountryDto>;
    cursor: number;
    search: string;
    sortKey: SortKeyTypes;
    sortDirection: SortDirectionTypes;
    isShownAddCountry: boolean;
}

const initialState: CountryState  = {
    country: [],
    cursor: 20,
    search: "",
    sortKey: "name",
    sortDirection: "ASC",
    isShownAddCountry: false,
}

const countryReducer = (state=initialState, action: CountryActionTypes) => {
    switch(action.type){
        case CountryTypes.FETCH_ALL_COUNTRY_SUCCESS :
            return{
                ...state,
                country: action.payload
            }
        case CountryTypes.SET_CURSOR :
            return{
                ...state,
                cursor: action.payload
            }
        case CountryTypes.SET_SEARCH :
            return{
                ...state,
                search: action.payload
            }
        case CountryTypes.CHANGE_SORT:
            return {
                ...state,
                sortKey: action.payload.sortKey,
                sortDirection: action.payload.sortDirection
            }
        case CountryTypes.SHOW_ADD_COUNTRY:
            return{
                ...state,
                isShownAddCountry: action.payload
            }
        case CountryTypes.ADD_COUNTRY:
            return{
                ...state,
                country: [...state.country, action.payload]
            }
        case CountryTypes.DELETE_COUNTRY:
            const countries = state.country.filter(country => country.id !== action.payload);
            return{
                ...state,
                country: [...countries]
            }
        default : 
            return state
    }
}

export default countryReducer;