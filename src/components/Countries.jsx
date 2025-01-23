import CountryCard from "./CountryCard"
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router"
import SearchAndFilter from "./SearchAndFilter"


const Countries = ({
  countries,
  isOpen,
  selectedOption,
  query,
  options,
  toggleDropdown,
  handleInputChange,
  handleKeyPress,
  handleOptionClick,
  handleOptionKeyDown,
  handleSearch,
  isDarkMode

}) => {

  const navigate = useNavigate()

  const handleCardClick = (countryCode) => {
    navigate(`/countries/${countryCode}`)
  }

  return (
    <div className={`my-8 sm:container`}>

      <div className="container">

        <SearchAndFilter
          isOpen={isOpen}
          selectedOption={selectedOption}
          query={query}
          options={options}
          toggleDropdown={toggleDropdown}
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          handleOptionClick={handleOptionClick}
          handleOptionKeyDown={handleOptionKeyDown}
          handleSearch={handleSearch}
          countries={countries}
          isDarkMode={isDarkMode}
        />
      </div>

      <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {countries.map(country =>
          <li
            key={country.ccn3}
            onClick={() => handleCardClick(country.cca3)}
            className="cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1
            hover:scale-[1.01] duration-100
          "  >
            <Link to={`/countries/${country.cca3}`}>
              <CountryCard
                country={country}
                isDarkMode={isDarkMode}
              />
            </Link>
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
