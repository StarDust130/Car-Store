import { useState } from "react";
import { Products } from "./../components/Products";
import contents from "./../content";
import "../styles/card.css";


function CarCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContents, setFilteredContents] = useState(contents);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter the contents based on the search term
    const filtered = contents.filter((content) =>
      content.name.toLowerCase().includes(searchTerm)
    );
    setFilteredContents(filtered);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={searchTerm}
        />
        <img
          alt="Search"
          src="https://img.icons8.com/ios/20/000000/search--v1.png"
        />
      </div>
      <div className="App">
        {filteredContents.length === 0 ? (
          <h1>No cars found. 😿</h1>
        ) : (
          filteredContents.map((content) => (
            <Products
              key={content.id}
              image={content.image}
              name={content.name}
              price={content.price}
              totalSales={content.totalSales}
              timeLeft={content.timeLeft}
              rating={content.rating}
            />
          ))
        )}
      </div>
     
    </>
  );
}

export default CarCard;
