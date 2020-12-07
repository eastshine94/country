export interface CountryResponseDto {
    alpha2Code: string;
    name: string;
    capital: string;
    region: string;
    callingCodes: Array<string>;
}

export interface CountryDto {
    alpha2Code: string;
    name: string;
    capital: string;
    region: string;
    callingCodes: string;
}

export interface ChangeSortDto {
    sortKey:SortKeyTypes;
    sortDirection: SortDirectionTypes;
}

export type SortDirectionTypes = "ASC" | "DESC";

export type SortKeyTypes = "alpha2Code" | "name" | "capital" | "region" | "callingCodes";