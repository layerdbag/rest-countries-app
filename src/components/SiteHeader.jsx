import { FaMoon } from 'react-icons/fa'

const SiteHeader = ({ handleClick, isDarkMode }) => {
  return (
    <header className={`px-6 md:px-12 py-8 shadow-lg ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'}`}>
      <div className="flex justify-between items-center container">
        <h1 className={`text-base sm:text-2xl font-bold ${isDarkMode ? 'text-font-dark' : 'text-font-light'}`}>Where in the world?</h1>
        <button className='flex items-center'
          onClick={handleClick}
        >
          <FaMoon className={`${isDarkMode ? 'fill-light' : 'fill-dark-blue'}`} />
          <span className={`text-sm font-semibold ml-2 ${isDarkMode ? 'text-font-dark' : 'text-dark-blue'}`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>

    </header>
  )
}


export default SiteHeader