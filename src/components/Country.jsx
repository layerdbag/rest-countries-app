import PropTypes from 'prop-types';

const Country = ({ country }) => {
  const { name, capital, flags, region, population } = country;

  return (
    <article className="card">
      <div className="card-image">
        <img src={flags.png} alt="flag" />
      </div>
      <div className="card-content wrapper">
        <h2 className="text-500 pad-bottom-300">{name}</h2>
        <div className="text-300">
          <p><span className="weight-semibold">Population: </span>{population}</p>
          <p><span className="weight-semibold">Region: </span>{region}</p>
          <p><span className="weight-semibold">Capital: </span>{capital}</p>
        </div>
      </div>
    </article>
  )
}

Country.propTypes = {
  country: PropTypes.object,
  flags: PropTypes.object,
  name: PropTypes.string,
  population: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,

}


export default Country
