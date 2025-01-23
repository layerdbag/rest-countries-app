import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({
  query,
  handleInputChange,
  handleSearch,
  isDarkMode
}) => {


  return (

    <div
      className={`mb-12 sm:mb-0 py-2 px-6 border-0 rounded-lg flex items-center space-x-4 shadow-lg basis-[35%] ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'} `}
    >
      <button type='button' onClick={handleSearch} aria-label='Search'

      >
        <FaSearch
          className={`${isDarkMode ? 'text-font-dark' : 'text-input-light'} `}
        />
      </button>
      <label htmlFor='search-input' className='sr-only'>
      </label>
      <input
        className={`basis-[92%] py-2  border-0 ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'}
        ${isDarkMode ? 'text-light' : 'text-input-light'} 
      `}
        type='text'
        id='search-input'
        name='search-input'
        placeholder="Search for a country..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
    </div>

  )
}


SearchBar.propTypes = {
  query: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSearch: PropTypes.func,
}


export default SearchBar