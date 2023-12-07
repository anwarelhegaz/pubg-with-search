// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import './SearchPage.css';
// import axios from 'axios';

// const SearchPage = ({ isOpen, closeSearch, items }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState([])  ;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     axios
//       .get(`https://food-list.onrender.com/items?category=all`)
//       .then((response) => {
//         setFilteredItems(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again.');
//         setLoading(false);
//       });
//   }, [isOpen]);

//   const filterItems = (query) => {
//     const filtered = items.filter((item) => item.name.includes(query));
//     setFilteredItems(filtered);
//   };

//   return (
//     <>
//       {isOpen && (
//         <section className="search-section">
//           <div className="search-contant">
//             <input
//               type="search"
//               placeholder="ابحث ..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 filterItems(e.target.value);
//               }}
//             />

//             {/* Display filtered items */}
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {filteredItems.map((item) => (
//               <div key={item.id}>
//                 <h2>{item.name}</h2>
//                 <img src={item.img} alt={item.name} />
//                 {/* <div dangerouslySetInnerHTML={{ __html: item.bio }} /> */}
//               </div>
//             ))}

//             {/* Start btn Close ****************************** */}
//             <div className="close-sidbar close-search" onClick={closeSearch}>
//               <span className="circel-h"></span>
//               <span className="close-sidebar"></span>
//               <span>إغلاق</span>
//             </div>
//             {/* End btn Close ****************************** */}
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// SearchPage.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   closeSearch: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       bio: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default SearchPage;
/***************************************************************** */
/* ***************************************** good code ***/
// import './SearchPage.css';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const SearchPage = ({ isOpen, closeSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setSearchResults([]); // Reset results when search query is empty
//       return;
//     }

//     // Use your API endpoint to search for products only if there is a matching name
//     axios
//       .get(`https://babgy.otrans.co/api/auth/fetchallproduct?search=${searchQuery}`)
//       .then((response) => {
//         const matchingProducts = response.data.items.filter(
//           (product) => product.name.includes(searchQuery)
//         );
//         setSearchResults(matchingProducts);
//       })
//       .catch((error) => {
//         console.error('Error fetching search results:', error);
//         // Handle error as needed
//       });
//   }, [searchQuery]);
//   return (
//     <>
//       {isOpen && (
//         <section className="search-section">
//           <div className="search-contant">
//             <input
//               type="search"
//               placeholder="ابحث ..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />

//             {/* Display search results */}
//             {searchResults.length > 0 && (
//               <div className="search-results">
//                 <ul>
//                   {searchResults.map((result) => (
//                     <li key={result.id}>{result.name}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Start btn Close ****************************** */}
//             <div className="close-sidbar close-search" onClick={closeSearch}>
//               <span className="circel-h"></span>
//               <span className="close-sidebar"></span>
//               <span>إغلاق</span>
//             </div>
//             {/* End btn Close ****************************** */}
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// SearchPage.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   closeSearch: PropTypes.func.isRequired,
// };

// export default SearchPage;

/******************************************************** */

import './SearchPage.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SearchPage = ({ isOpen, closeSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]); // Reset results when search query is empty
      return;
    }

    axios
      .get(`https://babgy.otrans.co/api/auth/fetchallproduct?search=${searchQuery}`)
      .then((response) => {
        const matchingProducts = response.data.items.filter(
          (product) => product.name.includes(searchQuery)
        );
        setSearchResults(matchingProducts);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        // Handle error as needed
      });
  }, [searchQuery]);

  // Function to handle clicking on a search result item
  const handleResultItemClick = () => {
    closeSearch();
    
  };

  return (
    <>
      {isOpen && (
        <section className="search-section">
          <div className="search-contant">
            <input
              type="search"
              placeholder="ابحث ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Display search results with clickable items */}
            {searchResults.length > 0 && (
              <div className="search-results">
                <ul className='boxs-search-content '>
                  {searchResults.map((result) => (
                    <li key={result.id} onClick={handleResultItemClick}>
                      {/* Use Link to wrap the result name */}
                      <Link to={`/view/${result.id}`}>
                        <div className="search-box-contect mt-2 d-flex ">
                          <div className="text-search-content">
                            <h3>{result.name}</h3>
                            <span>{result.price} جنية</span>
                          </div>
                          <div className="image-search-content">
                            <img src={`https://babgy.otrans.co/product/${result.image}`} alt="" />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Start btn Close ****************************** */}
              <div className="close-sidbar close-search" onClick={closeSearch}>
                <span className="circel-h"></span>
                <span className="close-sidebar"></span>
                <span>إغلاق</span>
              </div>
            {/* End btn Close ****************************** */}
          </div>
        </section>
      )}
    </>
  );
};

SearchPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
};

export default SearchPage;