import {all, call, put, takeLatest} from 'redux-saga/effects';
import { CountryTypes } from '~/store/actions/country';
import { fetchAllCountry } from '~/apis/country';
import { CountryResponseDto, CountryDto} from '~/types/country';

export default function* countrySaga() {
    yield all([
        takeLatest(CountryTypes.FETCH_ALL_COUNTRY_REQUEST, $fetchAllCountry),
    ])
}

function* $fetchAllCountry() {
    try{
        const countries: Array<CountryResponseDto> = yield call(fetchAllCountry);
        const changeCountries: Array<CountryDto> = countries.map((country, idx) => ({...country, id: idx+1, callingCodes: country.callingCodes[0]}))
        yield put({
            type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS,
            payload: changeCountries
        });
    }catch(err){
        yield put({
            type: CountryTypes.FETCH_ALL_COUNTRY_FAILURE,
            payload: "나라 정보를 불러오지 못했습니다."
        })
    }
}