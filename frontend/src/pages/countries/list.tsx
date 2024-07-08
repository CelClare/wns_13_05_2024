import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES} from "@/pages/requetes/queries/countries.queries";
import { CountriesQuery, CountriesQueryVariables } from "@/graphql/client";

function ListCountries() {
    
    const { data} = useQuery<CountriesQuery, CountriesQueryVariables>(LIST_COUNTRIES, {
        fetchPolicy: "no-cache",
    });

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <ul className="list-decimal">
                {data?.countries.map(country => (
                    <li key={country.id}>{country.emoji}{country.name}</li>
                ))}
            </ul>
        </main>
    );
}

export default ListCountries;