import { Splitter } from "../UtilityLibrary"
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
  countries
}) => {
  
  return (
    <Splitter className='gap-top-400 gap-bottom-400'>
    <SearchBar
      query={query}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
      countries={countries}
    />
    <Dropdown
      isOpen={isOpen}
      selectedOption={selectedOption}
      options={options}
      toggleDropdown={toggleDropdown}
      handleOptionClick={handleOptionClick}
      handleOptionKeyDown={handleOptionKeyDown}
      handleKeyPress={handleKeyPress}
    />
  </Splitter>
  )
}


SearchAndFilter.propTypes = {
  isOpen : PropTypes.bool,
  selectedOption: PropTypes.string,
  query: PropTypes.string,
  options: PropTypes.array,
  toggleDropdown: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleOptionClick: PropTypes.func,
  handleOptionKeyDown: PropTypes.func,
  handleSearch: PropTypes.func,
  countries: PropTypes.array
}


export default SearchAndFilter