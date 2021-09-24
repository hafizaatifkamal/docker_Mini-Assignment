
import SearchBar from "../App";
import "font-awesome/css/font-awesome.min.css";
import "./search.css";

const Search = () => (
	<form id="form" role="search">
    <input
      className="w3-input w3-border w3-round-large"
      type="search"
      placeholder="Search All Tracks"
    />
    <button><i className="fa fa-search"></i></button>
   </form>
);

export default Search;