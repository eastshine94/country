import {all, call, put, takeLatest} from 'redux-saga/effects';
import { CountryTypes } from '~/store/actions/country';
import { fetchAllCountry } from '~/apis/country';

export default function* countrySaga() {
    yield all([
        takeLatest(CountryTypes.FETCH_ALL_COUNTRY_REQUEST, $fetchAllCountry),
    ])
}

function* $fetchAllCountry() {
    try{
        const countries = yield call(fetchAllCountry);
        yield put({
            type: CountryTypes.FETCH_ALL_COUNTRY_SUCCESS,
            payload: countries
        });
    }catch(err){
        yield put({
            type: CountryTypes.FETCH_ALL_COUNTRY_FAILURE,
            payload: "나라 정보를 불러오지 못했습니다."
        })
    }
}