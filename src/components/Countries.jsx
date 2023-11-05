import Country from "./Country"
import PropTypes from 'prop-types'


const Countries = ({ countries }) => {
  return (
    <div className="wrapper">
      <ul className="cards">
        {countries.map(country => 
          <li key={country.numericCode}>
          <Country 
            country={country}
          />
          </li>
        )}
      </ul>
    </div>
  )
}


Countries.propTypes = {
  countries: PropTypes.array
}



export default Countries


