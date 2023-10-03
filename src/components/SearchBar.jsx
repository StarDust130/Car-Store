/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "../styles/nav.css";

function SearchBar() {

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
         
        />
        <img
          alt="Search"
          src="https://img.icons8.com/ios/20/000000/search--v1.png"
        />
      </div>

     
    </>
  );
}

export default SearchBar;
