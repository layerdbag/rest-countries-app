
import { Wrapper } from "./UtilityLibrary"
//import './App.css'
import data from '../data.json';
import SiteHeader from './components/SiteHeader'
import SearchAndFilter from "./components/SearchAndFilter";
import Countries from "./components/Countries";


const Sample = () => {
  return (
    <div>
      <form>
      <div>
        <label>
        <select>
          <option hidden>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        </label>
        </div>
      </form>
    </div>
  )
}

const COUNTRIES = data;
console.log(COUNTRIES);

/**
 * 
 * ToDos
 * 
 * get flag
 * 
 * population
 * 
 * region
 * 
 * capital
 * 
 * regions : [
 * { id: 1, value: 'Africa'}, 
 * { id: 1, value: 'America'},
 * { id: 1, value: 'Asia'},
 * { id: 1, value: 'Europe'},
 * { id: 1, value: 'Oceania'}
 * ]
 * 
 * 
 * 
 */

const App = () => {
  //console.log('countries', countries[0]);
  return (
    <div>
      <SiteHeader />
      <main className="pad-top-300">
      <Wrapper component="div" className='pad-top-300'>
        <Sample />
        <div>
          <SearchAndFilter />
        </div>
        <Countries countries={COUNTRIES} />
      </Wrapper>
      </main>
    </div>
  )
}

export default App
