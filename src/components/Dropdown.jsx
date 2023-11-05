
const Dropdown = () => {
  return (
    <div className="dropdown">
      <button 
        tabIndex={0} 
        role='button'
        className="flex"
        >
        <span>Filter by Region</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button type='button'>
            Africa
          </button>
        </li>
        <li>
          <button type='button'>
           America
          </button>
        </li>
        <li>
          <button type='button'>
            Asia
          </button>
        </li>
      </ul>
    </div>
  )
}



export default Dropdown