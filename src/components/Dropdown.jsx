import PropTypes from 'prop-types'

const Dropdown = ({
  isOpen,
  selectedOption,
  options,
  toggleDropdown,
  handleKeyPress,
  handleOptionClick,
  handleOptionKeyDown
}) => {

  return (
    <div 
      className="dropdown" 
      role='combobox'
      aria-expanded={isOpen}
      aria-haspopup='listbox'>
      <div
        tabIndex='0' 
        className="dropdown-header"
        aria-haspopup='true'
        aria-controls='dropdown-list'
        onClick={toggleDropdown}
        onKeyDown={handleKeyPress}
        >
        {(selectedOption !== 'All' && selectedOption) || (<span>Filter by Region<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg> </span>)}
      </div>
      {isOpen && (
        <ul 
          className="dropdown-list"
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
  isOpen : PropTypes.bool,
  selectedOption: PropTypes.string,
  options: PropTypes.array,
  toggleDropdown: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleOptionClick: PropTypes.func,
  handleOptionKeyDown: PropTypes.func
}



export default Dropdown