import Country from "./Country"
import PropTypes from 'prop-types'


const Countries = ({ countries }) => {
  return (
    <div className="wrapper">
      <ul className="cards">
        {countries.map(country => 
          <Country 
            key={country.numericCode}
            country={country}
          />
        )}
      </ul>
    </div>
  )
}


Countries.propTypes = {
  countries: PropTypes.array
}



export default Countries


