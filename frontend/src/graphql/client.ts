import { LIST_COUNTRIES } from '@/pages/requetes/queries/countries.queries';
import { GET_COUNTRY_DETAILS } from "@/pages/requetes/queries/countryDetails";
import * as Apollo from '@apollo/client';
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const defaultOptions = {} as const;

export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, id: number, emoji: string }> };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;

export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions}
    return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(LIST_COUNTRIES, options);
}

export function useCountryDetails(code: string) {
    const options = {
        variables: { code },
        fetchPolicy: 'no-cache' as const
    };
    return Apollo.useQuery(GET_COUNTRY_DETAILS, options);
}
