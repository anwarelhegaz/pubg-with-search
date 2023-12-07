// // // NewItemForm.js
// // import { useState } from 'react';
// // import "./NewItemForm.css";
// // import PropTypes from 'prop-types';
// // import axios from 'axios';

// // const NewItemForm = ({ onAddItem, categories }) => {

// //     const [categories, setCategories] = useState([]);
// //     const [newItem, setNewItem] = useState({
// //         category: '', // Set the default category to the selected category
// //         name: '',
// //         img: '',
// //         price: '',
// //         bio: '',
// //     });

// //     const handleInputChange = (property, value) => {
// //         setNewItem({ ...newItem, [property]: value });
// //     };

// //    // Function to add a new item
// //     const addItem = async () => {
// //     // Validate and add the item
// //     if (!newItem || Object.values(newItem).some((value) => !value.trim())) {
// //         console.error('New item is empty or has empty fields.');
// //         console.log('newItem:', newItem); // Add this line for debugging
// //         return;
// //     }

// //     try {
// //         const response = await axios.post('https://babgy.otrans.co/api/auth/addproduct', newItem);
// //         // Assuming the API returns the added item in the response, you can update the state accordingly
// //         onAddItem(response.data.item);
// //     } catch (error) {
// //         console.error('Error adding item:', error.response); // Log the entire response object
// //         // Handle error as needed
// //     }

// //     // Reset the form fields
// //     setNewItem({
// //         category: '',
// //         name: '',
// //         img: '',
// //         price: '',
// //         bio: '',
// //     });
// // };
// // const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //         const reader = new FileReader();
// //         reader.onloadend = () => {
// //             handleInputChange('image', reader.result);
// //         };
// //         reader.readAsDataURL(file);
// //     }
// // };

// //     useEffect(() => {
// //         const fetchCategories = async () => {
// //         try {
// //             const response = await axios.get('https://babgy.otrans.co/api/auth/FetchCategory');
// //             setCategories(response.data);
// //         } catch (error) {
// //             console.error('Error fetching categories:', error);
// //             // Handle error as needed
// //         }
// //         };

// //         fetchCategories();
// //     }, []);
// //     return (
// //         <div>
// //         <h2 className='title-add-pro'>اضافه منتج</h2>
// //         <select
// //             className="form-select py-2 my-3"
// //             aria-label="Select Category"
// //             value={newItem.id_cat}
// //             onChange={(e) => handleInputChange('id_cat', e.target.value)}
// //         >
// //             <option value="" disabled>
// //             اختر الفئة
// //             </option>
// //             {categories.map((category) => (
// //             <option key={category.id} value={category.name}>
// //                 {category.name}
// //             </option>
// //             ))}
// //         </select>
// //         <input
// //             className="form-control py-2 my-3"
// //             type="text"
// //             placeholder="Name"
// //             value={newItem.name}
// //             onChange={(e) => handleInputChange('name', e.target.value)}
// //         />
// //         <input
// //             className="form-control py-2 my-3"
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageUpload}
// //         />
// //         <input
// //             className="form-control py-2 my-3"
// //             type="text"
// //             placeholder="Price"
// //             value={newItem.price}
// //             onChange={(e) => handleInputChange('price', e.target.value)}
// //         />
// //         <input
// //             className="form-control py-2 my-3"
// //             type="text"
// //             placeholder="Bio"
// //             value={newItem.bio}
// //             onChange={(e) => handleInputChange('bio', e.target.value)}
// //         />
// //         <button className='btn bg-success' onClick={addItem}>اضافه</button>
// //         </div>
// //     );
// //     };

// //     NewItemForm.propTypes = {
// //     onAddItem: PropTypes.func.isRequired,
// //     categories: PropTypes.arrayOf(PropTypes.shape({
// //         id: PropTypes.number.isRequired,
// //         name: PropTypes.string.isRequired,
// //     })).isRequired,
// // };

// // export default NewItemForm;



// import { useState } from 'react';
// import "./NewItemForm.css";
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const NewItemForm = ({ onAddItem, categories }) => {

    
//     const [newItem, setNewItem] = useState({
//         category: '', // Set the default category to the selected category
//         name: '',
//         img: 'https://babgy.otrans.co/images/1699141343.png',
//         price: '',
//         bio: '',
//         id_cat:'',
//     });

//     const handleInputChange = (property, value) => {
//         setNewItem({ ...newItem, [property]: value });
//     };

    
//     // Function to add a new item
//     const addItem = async () => {
//         // Validate and add the item
//         if (!newItem || Object.values(newItem).some((value) => !value.trim())) {
//             console.error('New item is empty or has empty fields.');
//             console.log('newItem:', newItem); // Add this line for debugging
//             return;
//         }
    
//         try {
//             // Add the new item
//             const response = await axios.post('https://babgy.otrans.co/api/auth/addproduct', newItem);
//             // Assuming the API returns the added item in the response, you can update the state accordingly
//             onAddItem(response.data.item);
    
//             // After adding the item, fetch all products
//             const fetchAllProductsResponse = await axios.get('https://babgy.otrans.co/api/auth/fetchallproduct');
//             console.log('Fetched all products:', fetchAllProductsResponse.data);
//         } catch (error) {
//             console.error('Error adding item:', error.response); // Log the entire response object
//             // Handle error as needed
//         }
    
//         // Reset the form fields
//         setNewItem({
//             id_cat: '', // Use id_cat consistently
//             name: '',
//             img: '',
//             price: '',
//             bio: '',
//         });
//     };

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 handleInputChange('image', reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };



    
//     return (
//         <div>
//             <h2 className='title-add-pro'>اضافه منتج</h2>
//             <select
//                 className="form-select py-2 my-3"
//                 aria-label="Select Category"
//                 value={newItem.id_cat}
//                 onChange={(e) => handleInputChange('id_cat', e.target.value)}
//             >
//                 <option value="" disabled>
//                     اختر الفئة
//                 </option>
//                 {categories.map((category) => (
//                     <option className='text-danger' key={category.id} value={category.id}>
//                         {category.name}
//                     </option>
//                 ))}
//             </select>
//             <input
//                 className="form-control py-2 my-3"
//                 type="text"
//                 placeholder="Name"
//                 value={newItem.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//             />
//             <input
//                 className="form-control py-2 my-3"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//             />
//             <input
//                 className="form-control py-2 my-3"
//                 type="text"
//                 placeholder="Price"
//                 value={newItem.price}
//                 onChange={(e) => handleInputChange('price', e.target.value)}
//             />
//             <input
//                 className="form-control py-2 my-3"
//                 type="text"
//                 placeholder="Bio"
//                 value={newItem.bio}
//                 onChange={(e) => handleInputChange('bio', e.target.value)}
//             />
//             <button className='btn bg-success' onClick={addItem}>اضافه</button>
//         </div>
//     );
// };

// NewItemForm.propTypes = {
//     onAddItem: PropTypes.func.isRequired,
//     categories: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//     })).isRequired,
// };

// export default NewItemForm;
