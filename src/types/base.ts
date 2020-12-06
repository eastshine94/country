import { AxiosResponse } from 'axios';

interface Response<T> {
    data: T,
}

export type ApiResponse<T> = AxiosResponse<Response<T>>