export interface CountryResponseDto {
    alpha2Code: string;
    name: string;
    capital: string;
    region: string;
    callingCodes: Array<string>;
}