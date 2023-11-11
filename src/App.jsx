import { useState } from "react";
import { Wrapper } from "./UtilityLibrary"
//import './App.css'
import data from '../data.json';
import SiteHeader from './components/SiteHeader'
import SearchAndFilter from "./components/SearchAndFilter";
import Countries from "./components/Countries";
//import { nanoid } from "nanoid";

const options = [ 'All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ]
const initialCountries = data;
//const countries = initialCountries;

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState(initialCountries)


  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = ({ target }) => {
    const newQuery = target.value;
    setQuery(newQuery)
    search(newQuery)
  }

  const handleSearch = () => {
    search(query)
    setSelectedOption(null)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (option !== 'All' && option !== null) {
      filter(option)
    }

    if (option === 'All') {
      filter('')
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

  // const filterName = (arr, text) => arr.filter(
  //   item => item.name.toLowerCase().includes(text.toLowerCase())
  // )

  // const filterRegion = (arr, text) => arr.filter(
  //   item => item.region.toLowerCase() === text.toLowerCase()
  // )

  // const toQuery = ''

  // let countriesToShow = query
  //   ? filterName(countries, query)
  //   : countries
 

  // const handleQueries = searchQuery => {
  //   for (let i = 0; i < options.length; i++) {
  //     if (searchQuery === options[i]) {
  //       filterRegion(countries, query)
  //     }
  //   }


  // }

  const search = (searchQuery) => {
    const searchCountries = initialCountries.filter(country => 
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setCountries(searchCountries)
  }

  const filter = (searchQuery) => {
    const searchCountries = initialCountries.filter(country => 
      country.region.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setCountries(searchCountries)
  }



  return (
    <div>
      <SiteHeader />
      <main className="pad-top-300">
      <Wrapper component="div" className='pad-top-300'>

        <div>
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
          />
        </div>

        {countries.length > 0 
          ? <Countries countries={countries} />
          : <Wrapper>No matching result</Wrapper>}
      </Wrapper>
      </main>
    </div>
  )
}

export default App
