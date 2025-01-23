import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router'

const CountryCard = ({ country, isDarkMode }) => {

  const { name, capital, flags, region, population } = country;

  return (
    <article className={` mx-auto max-w-[18.5rem] sm:max-w-full border-0 border-solid 
    rounded-lg shadow-md ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'}
    ${isDarkMode ? 'text-font-dark' : 'text-dark-blue'}`}
    >
      <div className="rounded-t-lg">
        <img src={flags.svg} alt="flag" className='object-cover w-full aspect-[16/9] rounded-t-lg' />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name.common}</h2>
        <div className="my-4">
          <p><span className="font-semibold">Population: </span>{population}</p>
          <p><span className="font-semibold">Region: </span>{region}</p>
          <p><span className="font-semibold">Capital: </span>{capital}</p>
        </div>
      </div>
    </article>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object,
  flags: PropTypes.object,
  name: PropTypes.string,
  population: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,

}


export default CountryCard
