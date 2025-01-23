
import SearchBar from "./SearchBar"
import Dropdown from "./Dropdown"
import PropTypes from 'prop-types'


const SearchAndFilter = ({
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
  // countries,
  isDarkMode,
}) => {

  return (
    <div className='py-8 sm:flex justify-between'>
      <SearchBar
        query={query}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        // countries={countries}
        isDarkMode={isDarkMode}
      />
      <Dropdown
        isOpen={isOpen}
        selectedOption={selectedOption}
        options={options}
        toggleDropdown={toggleDropdown}
        handleOptionClick={handleOptionClick}
        handleOptionKeyDown={handleOptionKeyDown}
        handleKeyPress={handleKeyPress}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}


SearchAndFilter.propTypes = {
  isOpen: PropTypes.bool,
  selectedOption: PropTypes.string,
  query: PropTypes.string,
  options: PropTypes.array,
  toggleDropdown: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleOptionClick: PropTypes.func,
  handleOptionKeyDown: PropTypes.func,
  handleSearch: PropTypes.func,
  // countries: PropTypes.array
}


export default SearchAndFilter