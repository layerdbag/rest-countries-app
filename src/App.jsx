import { useState, useEffect } from "react";
import SiteHeader from './components/SiteHeader'
import Countries from "./components/Countries";
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router'
import Country from "./components/Country";
import data from '../data-new.json'
import axios from 'axios'

const initialCountries = data

const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState(data)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
  // Loading data into App
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/api/all`)
      if (response) {
        setCountries(response.data)
      }
    }
    fetchData()

  }, [])



  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = ({ target }) => {
    const newQuery = target.value;
    setQuery(newQuery)
    searchByName(newQuery)
    setSelectedOption(null)
  }

  const handleSearch = () => {
    searchByName(query)
    setSelectedOption(null)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (option !== 'All' && option !== null) {
      filterByRegion(option)
    }

    if (option === 'All') {
      filterByRegion('')
    }
    setQuery('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      toggleDropdown()
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleOptionKeyDown = (e, option) => {
    if (e.key === 'Enter') {
      handleOptionClick(option)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const filterByRegion = (searchQuery) => {
    const searchCountries = initialCountries.filter(country =>
      country.region.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setCountries(searchCountries)
  }



  const searchByName = (searchQuery) => {
    const searchCountries = initialCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setCountries(searchCountries)
  }



  return (
    <Router>
      <div className={`min-h-full ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <SiteHeader
          handleClick={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <main className="mx-6 sm:mx-12">

          <Routes>
            <Route path='countries/:id' element={<Country
              countries={initialCountries}
              isDarkMode={isDarkMode}
            />
            }
            />
            <Route path='/' element={
              <Countries
                countries={countries}
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
                isDarkMode={isDarkMode}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
