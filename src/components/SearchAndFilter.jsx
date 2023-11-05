import { Splitter } from "../UtilityLibrary"
import SearchBar from "./SearchBar"
import Dropdown from "./Dropdown"


const SearchAndFilter = () => {
  return (
    <Splitter className='gap-top-400 gap-bottom-400'>
      <SearchBar />
      <Dropdown />
    </Splitter>
  )
}



export default SearchAndFilter