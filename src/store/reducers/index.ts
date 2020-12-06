import { combineReducers } from 'redux';
import country, {CountryState} from './country';

export interface RootState {
    country: CountryState;
}

const rootReducer = combineReducers({
    country
});

export default rootReducer;