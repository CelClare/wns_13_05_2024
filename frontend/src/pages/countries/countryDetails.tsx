import { useRouter } from 'next/router';
import { useCountryDetails } from '@/graphql/client';

const CountryDetailPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const { data } = useCountryDetails(code as string);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.country.name} {data.country.emoji}</h1>
          <p>Code: {data.country.code}</p>
          <p>Continent: {data.country.continent.name}</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetailPage;
