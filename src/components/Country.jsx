import React from 'react'
import { useParams, useNavigate } from 'react-router'
import NavigateButton from './NavigateButton'
import { FaArrowLeft } from 'react-icons/fa'
import NotFound from './NotFound'


const Country = ({ countries, isDarkMode }) => {
  const id = useParams().id
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/rest-countries-app')
  }

  const handleBorderNavigation = (borderCountry) => {
    navigate(`/rest-countries-app/countries/${borderCountry}`)
  }

  const country = countries.find(c => c.cca3 === id)



  if (!country) {
    return (
      <NotFound
        content={id}
        handleClick={handleNavigation}
      />
    )
  }


  const borderCountries = countries.filter(c => country.borders?.includes(c.cca3))


  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,

  } = country

  return (
    <div className={`container ${isDarkMode ? 'bg-dark' : 'bg-light'}
    ${isDarkMode ? 'text-font-dark' : 'text-dark-blue'} my-10`}>
      <div className='py-6 md:py-12 '>
        <NavigateButton
          icon={<FaArrowLeft />}
          text='Back'
          handleClick={handleNavigation}
          isDarkMode={isDarkMode}
        />
      </div>
      <div className='lg:flex gap-8 pt-6 lg:gap-20'>
        <div className='border-0 basis-[40%]'>
          <img src={flags.svg} alt='flag' className='border-0 md:aspect-[3/2] object-cover max-w-full' />
        </div>
        <div className='border-0 basis-[40%] py-8'>
          <h2 className='text-xl font-bold mb-6'>{name.official}</h2>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='mb-8'>
              <p><span className='font-semibold'>Native Name:</span> {name.common}</p>
              <p><span className='font-semibold'>Population:</span> {population}</p>
              <p><span className='font-semibold'>Region:</span> {region}</p>
              <p><span className='font-semibold'>Sub Region:</span> {subregion}</p>
              <p><span className='font-semibold'>Capital:</span> {capital}</p>
            </div>
            <div>
              <p><span className='font-semibold'>Top Level Domain:</span> {tld}</p>
              <p><span className='font-semibold'>Currencies:</span> {Object.values(currencies)[0].name}</p>
              <p><span className='font-semibold'>Languages:</span> {Object.values(languages).join(', ')}</p>
            </div>
          </div>
          <div className='md:flex mt-6'>
            <p className='font-semibold mb-2 md:mr-4'>Border Countries:</p>
            <div className='flex flex-wrap gap-1'>
              {borderCountries.map(c =>
                <NavigateButton
                  text={c.name.common}
                  key={c.cca3}
                  handleClick={() => handleBorderNavigation(c.cca3)}
                  isDarkMode={isDarkMode}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country