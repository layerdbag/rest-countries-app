import PropTypes from 'prop-types'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

const Dropdown = ({
  isOpen,
  selectedOption,
  options,
  toggleDropdown,
  handleKeyPress,
  handleOptionClick,
  handleOptionKeyDown,
  isDarkMode
}) => {

  return (
    <div
      className={`relative rounded-md px-4 py-3 w-56 min-h-10 cursor-pointer shadow-lg ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'} ${isDarkMode ? 'text-font-dark' : 'text-font-light'} `}
      role='combobox'
      aria-expanded={isOpen}
      aria-haspopup='listbox'>
      <div
        tabIndex='0'
        className=""
        aria-haspopup='true'
        aria-controls='dropdown-list'
        onClick={toggleDropdown}
        onKeyDown={handleKeyPress}
      >
        {(selectedOption !== 'All' && selectedOption) ||
          (<div className=' flex space-x-14 items-end'><span>Filter by Region</span> {!isOpen ? <FaChevronDown /> : <FaChevronRight />} </div>)}
      </div>
      {isOpen && (
        <ul
          className={`rounded-md absolute z-10 -right-[0.05rem] mt-4 sm:mt-6 w-[14rem]  py-2 shadow-lg ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'}`}
          id='dropdown-list'
          role='listbox'
          aria-labelledby="dropdown-header"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => handleOptionKeyDown(e, option)}
              tabIndex='0'
              role='option'
              aria-selected={option === selectedOption}
              className='my-1 px-4'
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  selectedOption: PropTypes.string,
  options: PropTypes.array,
  toggleDropdown: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleOptionClick: PropTypes.func,
  handleOptionKeyDown: PropTypes.func
}



export default Dropdown