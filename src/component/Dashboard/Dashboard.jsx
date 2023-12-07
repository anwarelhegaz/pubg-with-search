// // Dashboard.jsx
// import  { useState } from 'react';
// import LoginForm from './LoginForm'; // Import the LoginForm component

// function Dashboard() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = (enteredUsername, enteredPassword) => {
//         // Replace this with actual JSON file data
//         const loginData = [
//         {
//             username: 'Ahmed',
//             password: 123456,
//         },
//         // Add more user data if needed
//         ];

//         // Check if the entered credentials match any user's data
//         const user = loginData.find(user => user.username === enteredUsername && user.password == enteredPassword);

//         if (user) {
//         setIsLoggedIn(true);
//         } else {
//         setIsLoggedIn(false);
//         console.log('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//         {isLoggedIn ? (
//             <>
//             <h1>Welcome to the Dashboard, Admin</h1>
//             {/* Display your dashboard content here */}
//             </>
//         ) : (
//             <LoginForm onLogin={handleLogin} />
//         )}
//         </div>
//     );
// }

// export default Dashboard;

// const Dashboard = () => {
//     // Implement your add, edit, and remove logic here

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             <h1>IM Dashboard Man</h1>
//             {/* Render your dashboard components */}
//         </div>
//     );
// };

// export default Dashboard;

// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({});

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({});
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // Function to remove an item
//     const removeItem = (id) => {
//         // Send a DELETE request to your JSON server to remove the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'DELETE',
//         })
//         .then(() => setItems(items.filter((item) => item.id !== id)))
//         .catch((error) => console.error('Error removing item:', error));
//     };

//     // Function to edit an item
//     const editItem = (id, updatedItem) => {
//         // Send a PUT request to your JSON server to update the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//         })
//         .then(() => {
//             // Update the edited item in the local state
//             setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//             setEditedItem(null); // Reset the edited item state
//         })
//         .catch((error) => console.error('Error editing item:', error));
//     };

//     // Function to initiate item editing
//     const startEditingItem = (id) => {
//         // Find the item to edit by ID
//         const itemToEdit = items.find((item) => item.id === id);
//         if (itemToEdit) {
//         setEditedItem(itemToEdit);
//         }
//     };

//     // Function to cancel item editing
//     const cancelEditingItem = () => {
//         setEditedItem(null); // Reset the edited item state
//     };

//     return (
//         <div>
//         <h1>Dashboard</h1>
//         <div>
//             <h2>Add New Item</h2>
//             <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name || ''}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             />
//             {/* Add more input fields for other item properties */}
//             <button onClick={addItem}>Add</button>
//         </div>
//         <div>
//             <h2>Items List</h2>
//             <ul>
//             {items.map((item) => (
//                 <li key={item.id}>
//                 {item.name} - {item.price}
//                 <button onClick={() => removeItem(item.id)}>Remove</button>
//                 {/* Implement editing controls here */}
//                 </li>
//             ))}
//             </ul>
//         </div>
//         </div>
//     );
// };

// export default Dashboard;


// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({});
//     const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({});
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // Function to remove an item
//     const removeItem = (id) => {
//         // Send a DELETE request to your JSON server to remove the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'DELETE',
//         })
//         .then(() => setItems(items.filter((item) => item.id !== id)))
//         .catch((error) => console.error('Error removing item:', error));
//     };

//     // Function to edit an item
//     const editItem = (id, updatedItem) => {
//         // Send a PUT request to your JSON server to update the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//         })
//         .then(() => {
//             // Update the edited item in the local state
//             setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//             setEditedItem(null); // Reset the edited item state
//         })
//         .catch((error) => console.error('Error editing item:', error));
//     };

//     // Function to initiate item editing
//     const startEditingItem = (id) => {
//         // Find the item to edit by ID
//         const itemToEdit = items.find((item) => item.id === id);
//         if (itemToEdit) {
//         setEditedItem(itemToEdit);
//         }
//     };

//     // Function to cancel item editing
//     const cancelEditingItem = () => {
//         setEditedItem(null); // Reset the edited item state
//     };

//     return (
//         <div>
//         {/* ... (add and display items, similar to previous code) */}
//         <div>
//             <h2>Items List</h2>
//             <ul>
//             {items.map((item) => (
//                 <li key={item.id}>
//                 {item === editedItem ? (
//                     <div>
//                     {/* Render editing controls when editing */}
//                     {/* Update input fields and handle changes */}
//                     <input
//                         type="text"
//                         value={editedItem.name}
//                         onChange={(e) =>
//                         setEditedItem({
//                             ...editedItem,
//                             name: e.target.value,
//                         })
//                         }
//                     />
//                     {/* Add more input fields for other item properties */}
//                     <button onClick={() => editItem(editedItem.id, editedItem)}>
//                         Save
//                     </button>
//                     <button onClick={cancelEditingItem}>Cancel</button>
//                     </div>
//                 ) : (
//                     <div>
//                     {/* Display item details when not editing */}
//                     {item.name} - {item.price}
//                     <button onClick={() => removeItem(item.id)}>Remove</button>
//                     <button onClick={() => startEditingItem(item.id)}>Edit</button>
//                     </div>
//                 )}
//                 </li>
//             ))}
//             </ul>
//         </div>
//         </div>
//     );
// };

// export default Dashboard;




// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState({});
//   const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//   useEffect(() => {
//     // Fetch the items from your JSON server when the component mounts
//     fetch('http://localhost:3005/items')
//       .then((response) => response.json())
//       .then((data) => setItems(data.items))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Function to add a new item
// const addItem = () => {
//     // Ensure newItem is defined and not empty
//     if (!newItem || Object.keys(newItem).length === 0) {
//       console.error('New item is empty or undefined.');
//       return;
//     }
  
//     // Send a POST request to your JSON server with the new item
//     fetch('http://localhost:3005/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newItem),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setItems([...items, data]);
//         setNewItem({}); // Clear newItem after adding
//       })
//       .catch((error) => console.error('Error adding item:', error));
//   };
//   // Function to remove an item
//   const removeItem = (id) => {
//     // Send a DELETE request to your JSON server to remove the item
//     fetch(`http://your-json-server-url/items/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => setItems(items.filter((item) => item.id !== id)))
//       .catch((error) => console.error('Error removing item:', error));
//   };

//   // Function to edit an item
//   const editItem = (id, updatedItem) => {
//     // Send a PUT request to your JSON server to update the item
//     fetch(`http://your-json-server-url/items/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedItem),
//     })
//       .then(() => {
//         // Update the edited item in the local state
//         setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//         setEditedItem(null); // Reset the edited item state
//       })
//       .catch((error) => console.error('Error editing item:', error));
//   };

//   // Function to initiate item editing
//   const startEditingItem = (id) => {
//     // Find the item to edit by ID
//     const itemToEdit = items.find((item) => item.id === id);
//     if (itemToEdit) {
//       setEditedItem(itemToEdit);
//     }
//   };

//   // Function to cancel item editing
//   const cancelEditingItem = () => {
//     setEditedItem(null); // Reset the edited item state
//   };

//   return (
//     <div>
//       {/* ... (add and display items, similar to previous code) */}
//       <div>
//         <h2>Items List</h2>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item === editedItem ? (
//                 <div>
//                   {/* Render editing controls when editing */}
//                   {/* Update input fields and handle changes */}
//                   <input
//                     type="text"
//                     value={editedItem.name}
//                     onChange={(e) =>
//                       setEditedItem({
//                         ...editedItem,
//                         name: e.target.value,
//                       })
//                     }
//                   />
//                   {/* Add more input fields for other item properties */}
//                   <button onClick={() => editItem(editedItem.id, editedItem)}>
//                     Save
//                   </button>
//                   <button onClick={cancelEditingItem}>Cancel</button>
//                 </div>
//               ) : (
//                 <div>
//                   {/* Display item details when not editing */}
//                   {item.name} - {item.price}
//                   <button onClick={() => removeItem(item.id)}>Remove</button>
//                   <button onClick={() => startEditingItem(item.id)}>Edit</button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({
//         // Initialize newItem with default values
//         category: '',
//         name: '',
//         img: '',
//         price: '',
//         bio: '',
//     });
//     // const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Ensure newItem is defined and not empty
//         if (!newItem || Object.keys(newItem).length === 0) {
//         console.error('New item is empty or undefined.');
//         return;
//         }

//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({
//             // Reset newItem to its initial state after adding
//             category: '',
//             name: '',
//             img: '',
//             price: '',
//             bio: '',
//             });
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // ... rest of your code

// //     // Function to remove an item
// //   const removeItem = (id) => {
// //     // Send a DELETE request to your JSON server to remove the item
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(() => setItems(items.filter((item) => item.id !== id)))
// //       .catch((error) => console.error('Error removing item:', error));
// //   };

// //   // Function to edit an item
// //   const editItem = (id, updatedItem) => {
// //     // Send a PUT request to your JSON server to update the item
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(updatedItem),
// //     })
// //       .then(() => {
// //         // Update the edited item in the local state
// //         setItems(items.map((item) => (item.id === id ? updatedItem : item)));
// //         setEditedItem(null); // Reset the edited item state
// //       })
// //       .catch((error) => console.error('Error editing item:', error));
// //   };

// //   // Function to initiate item editing
// //   const startEditingItem = (id) => {
// //     // Find the item to edit by ID
// //     const itemToEdit = items.find((item) => item.id === id);
// //     if (itemToEdit) {
// //       setEditedItem(itemToEdit);
// //     }
// //   };

// //   // Function to cancel item editing
// //   const cancelEditingItem = () => {
// //     setEditedItem(null); // Reset the edited item state
// //   };
// /************************************************ */
// // const editItem = (id, updatedItem) => {
// //     // Send a PUT request to update the item on the server
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(updatedItem),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Update the item in the local state
// //         const updatedItems = items.map((item) =>
// //           item.id === data.id ? data : item
// //         );
// //         setItems(updatedItems);
// //         setEditedItem(null); // Clear editing state
// //       })
// //       .catch((error) => console.error('Error updating item:', error));
// //   };

// //   const removeItem = (id) => {
// //     // Send a DELETE request to remove the item from the server
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(() => {
// //         // Remove the item from the local state
// //         const updatedItems = items.filter((item) => item.id !== id);
// //         setItems(updatedItems);
// //       })
// //       .catch((error) => console.error('Error deleting item:', error));
// //   };

//     return (
//         <div>
//         {/* ... (add and display items, similar to previous code) */}
//         <div>
//             <h2>Add New Item</h2>
//             {/* Input fields for adding items */}
//             <input
//             type="text"
//             placeholder="Category"
//             value={newItem.category}
//             onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Image URL"
//             value={newItem.img}
//             onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Price"
//             value={newItem.price}
//             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Bio"
//             value={newItem.bio}
//             onChange={(e) => setNewItem({ ...newItem, bio: e.target.value })}
//             />
//             <button onClick={addItem}>Add Item</button>
//         </div>
//         {/* ... (display items) */}
//         <div>
//         <h2>Items List</h2>
//         {/* <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item === editedItem ? (
//               <div>
//                 { Render editing controls when editing }
//                 { Update input fields and handle changes }
//                 <input
//                   type="text"
//                   value={editedItem.name}
//                   onChange={(e) =>
//                     setEditedItem({
//                       ...editedItem,
//                       name: e.target.value,
//                     })
//                   }
//                 />
//                 { Add more input fields for other item properties }
//                 <button onClick={() => editItem(editedItem.id, editedItem)}>
//                   Save
//                 </button>
//                 <button onClick={() => setEditedItem(null)}>Cancel</button>
//               </div>
//             ) : (
//               <div>
//                 { Display item details when not editing }
//                 {item.name} - {item.price}
//                 <button onClick={() => removeItem(item.id)}>Remove</button>
//                 <button onClick={() => setEditedItem(item)}>Edit</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul> */}
//         </div>
//         </div>
//     );
// };

// export default Dashboard;

/************************************ */
// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("دجاج");

//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       setSelectedCategory(category);
//     };

//     const addItem = (newItem) => {
//       // Send a POST request to your JSON server with the new item
//       fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Use the spread operator to add the new item to the existing items array
//           setItems([...items, data]);
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => {
//           setItems(data); // Assuming 'items' is an array in the response
//           setIsLoading(false); // Mark loading as complete
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false); // Mark loading as complete even in case of an error
//         });
//     }, []);
    
//     useEffect(() => {
//       // Fetch items based on the selected category
//       if (selectedCategory) {
//         fetch(`http://localhost:3005/items?category=${selectedCategory}`)
//           .then((response) => response.json())
//           .then((data) => {
//             setItems(data);
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//             setIsLoading(false);
//           });
//       }
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'DELETE',
//       })
//         .then(() => {
//           // Remove the item from the items array
//           const updatedItems = items.filter((item) => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch((error) => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             <option value="popular">popular</option>
//             <option value="drinks">drinks</option>
//             <option value="chicken">chicken</option>
//             <option value="sweets">sweets</option>
//             <option value="salad">salad</option>
//             <option value="barbecue">barbecue</option>
//             <option value="meat">meat</option>
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing
//     const handleItemInputChange = (itemId, property, value) => {
//       // Find the edited item and update the specified property
//       const updatedItems = items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, [property]: value };
//         }
//         return item;
//       });
//       setItems(updatedItems);
//     };

//     // Function to save the edited item to the server
//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       // Update the item on the server
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedItem),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           // Exit "edit mode" and reset the editedItemId
//           cancelEditingItem();
//         })
//         .catch((error) => console.error('Error updating item:', error));
//     };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});

    
//     return (
//         <div className='dashboard'>
//           <div className="container">
//             {/* NewItemForm Component (addItem) */}
//             <NewItemForm onAddItem={addItem} />
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                   <li className={selectedCategory === 'دجاج' ? 'active' : ''}><button onClick={() => handleCategoryClick('دجاج')}>الدجاج والارز</button></li>
//                   <li className={selectedCategory === 'لحوم' ? 'active' : ''}><button onClick={() => handleCategoryClick('لحوم')}>اللحوم</button></li>
//                   <li className={selectedCategory === 'مشويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشويات')}>المشويات</button></li>
//                   <li className={selectedCategory === 'شعبي' ? 'active' : ''}><button onClick={() => handleCategoryClick('شعبي')}>الإيدامات والشعبيات</button></li>
//                   <li className={selectedCategory === 'اضافات' ? 'active' : ''}><button onClick={() => handleCategoryClick('اضافات')}>السلطات والمقبلا</button></li>
//                   <li className={selectedCategory === 'حلويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('حلويات')}>الحلا والكنافة</button></li>
//                   <li className={selectedCategory === 'مشروبات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشروبات')}>المشروبات</button></li>
//                 </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{selectedCategory}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.bio}</td>
//                             <td><img className='img-dashboard' src={item.img} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

/**************************** Test And Categore Start********************************************************************** */
// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("");

//     const [newCategory, setNewCategory] = useState([""]); // State to track the new category input


//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       setSelectedCategory(category);
//     };

//     const addNewCategory = () => {
//       if (newCategory.trim() !== '') {
//         // Update the JSON server with the new category
//         fetch(`http://localhost:3005/items`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ category: newCategory }),
//         })
//           .then((response) => response.json())
//           .then(() => {
//             // Update the UI with the new category
//             setSelectedCategory(newCategory);
//             setNewCategory(newCategory);
//           })
//           .catch((error) => console.error('Error adding category:', error));
//       }
//     };


//     const addItem = (newItem) => {
//       // Send a POST request to your JSON server with the new item
//       fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Use the spread operator to add the new item to the existing items array
//           setItems([...items, data]);
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => {
//           setItems(data); // Assuming 'items' is an array in the response
//           setIsLoading(false); // Mark loading as complete
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false); // Mark loading as complete even in case of an error
//         });
//     }, []);
    
//     useEffect(() => {
//       // Fetch items based on the selected category
//       if (selectedCategory) {
//         fetch(`http://localhost:3005/items?category=${selectedCategory}`)
//           .then((response) => response.json())
//           .then((data) => {
//             setItems(data);
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//             setIsLoading(false);
//           });
//       }
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'DELETE',
//       })
//         .then(() => {
//           // Remove the item from the items array
//           const updatedItems = items.filter((item) => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch((error) => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             <option value="شعبي">popular</option>
//             <option value="مشروبات">drinks</option>
//             <option value="دجاج">chicken</option>
//             <option value="حلويات">sweets</option>
//             <option value="اضافات">salad</option>
//             <option value="مشويات">barbecue</option>
//             <option value="لحوم">meat</option>
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing
//     const handleItemInputChange = (itemId, property, value) => {
//       // Find the edited item and update the specified property
//       const updatedItems = items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, [property]: value };
//         }
//         return item;
//       });
//       setItems(updatedItems);
//     };

//     // Function to save the edited item to the server
//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       // Update the item on the server
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedItem),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           // Exit "edit mode" and reset the editedItemId
//           cancelEditingItem();
//         })
//         .catch((error) => console.error('Error updating item:', error));
//     };

//     const handleNewCategoryChange = (e) => {
//       setNewCategory(e.target.value);
//     };
  
//     // const addNewCategory = () => {
//     //   if (newCategory.trim() !== '') {
//     //     setSelectedCategory(newCategory);
//     //     setNewCategory(newCategory);
//     //   }
//     // };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});

    
//     return (
//         <div className='dashboard'>
//           <div className="container">
//           <div className="add-category-content">
//             <input
//                 className='add-category'
//                 type="text"
//                 placeholder='اضافة قائمه'
//                 value={newCategory}
//                 onChange={handleNewCategoryChange}
//             />
//               <button onClick={addNewCategory}>اضافة قائمة</button>
//             </div>
//             {/* Pass selectedCategory to NewItemForm */}
//             <NewItemForm onAddItem={addItem} selectedCategory={selectedCategory} />
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                 {['دجاج', 'لحوم', 'مشويات', 'شعبي', 'اضافات', 'حلويات', 'مشروبات', newCategory].map((category) => (
//                     <li key={category} className={selectedCategory === category ? 'active' : ''}>
//                       <button onClick={() => handleCategoryClick(category)}>{category}</button>
//                     </li>
//                   ))}
//                 </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{category}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.bio}</td>
//                             <td><img className='img-dashboard' src={item.img} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

/**************************** Test And Categore end********************************************************************** */



// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';
// import axios from 'axios';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [categories, setCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("وجبات بابجي");

//     const [newCategoryName, setNewCategoryName] = useState('');
      

//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/FetchCategory')
//         .then(response => {
//           console.log('Categories response:', response.data); // Log the response data
//           setCategories(response.data);
//           setSelectedCategory(response.data[0]?.name); // Set default category
//         })
//         .catch(error => {
//           console.error('Error fetching categories:', error);
//           // Handle error as needed
//         });
//     }, []);



//     // Set the selected category when a category button is clicked
//     // const handleCategoryClick = (category) => {
//     //   setSelectedCategory(category);
//     // };
//     const handleCategoryClick = (category) => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${category}`)
//         .then(response => {
//           setItems(response.data.items);
//           setSelectedCategory(category);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/fetchallproduct')
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, []);

//     const addItem = (newItem) => {
//       axios.post('https://babgy.otrans.co/api/auth/addproduct', newItem)
//         .then(response => {
//           setItems([...items, response.data.item]);
//         })
//         .catch(error => {
//           console.error('Error adding item:', error);
//         });
//     };


//     useEffect(() => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${selectedCategory}`)
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       axios.delete(`https://babgy.otrans.co/api/auth/deleteproduct/${itemId}`)
//         .then(() => {
//           const updatedItems = items.filter(item => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch(error => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };
    

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.Bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing

//     const handleItemInputChange = (itemId, property, value) => {
//       const updatedItems = items.map(item => (item.id === itemId ? { ...item, [property]: value } : item));
//       setItems(updatedItems);
//     };

//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       axios.post(`https://babgy.otrans.co/api/auth/updateproduct/${itemId}`, editedItem)
//         .then(() => {
//           cancelEditingItem();
//         })
//         .catch(error => {
//           console.error('Error updating item:', error);
//           console.log('Error response data:', error.response.data); // Add this line
//         });
//     };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});


//     const handleAddCategory = async () => {
//       if (newCategoryName.trim() === '') {
//         // Handle empty category name as needed
//         return;
//       }
    
//       try {
//         const response = await axios.post('https://babgy.otrans.co/api/auth/addCategory', { name: newCategoryName });
//         console.log('Add Category Response:', response);
    
//         // Check the structure of the response data and update the code accordingly
//         const newCategory = response.data?.category; // Use optional chaining to avoid errors if category is not present
//         if (newCategory) {
//           setCategories(prevCategories => [...prevCategories, newCategory]);
//           setSelectedCategory(newCategory.name);
//           setNewCategoryName('');
//         } else {
//           // Handle the case when the response data doesn't contain the expected structure
//           console.error('Invalid response data structure:', response.data);
//         }
//       } catch (error) {
//         console.error('Error adding category:', error);
//       }
//     };
    
//     return (
//         <div className='dashboard'>
//           <div className="container">
//             <div className="add-categories">
//           <h2 className='text-danger'>اضافة قائمة جديدة</h2>
//           <input
//             className='add-cat'
//             type="text"
//             value={newCategoryName}
//             onChange={(e) => setNewCategoryName(e.target.value)}
//           />
//           <button onClick={handleAddCategory}>اضافة قائمة</button>
//         </div>

//             {/* NewItemForm Component (addItem) */}
//             {categories && <NewItemForm onAddItem={addItem} categories={categories} />}
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                 {categories && categories.map((category) => (
//                   <li key={category.id} className={selectedCategory === category.name ? 'active' : ''}>
//                     <button onClick={() => handleCategoryClick(category.name)}>{category.name}</button>
//                   </li>
//                 ))}
//               </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{category}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.Bio}</td>
//                             <td className='text-center'><img className='img-dashboard' src={item.image} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;



// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';
// import axios from 'axios';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [categories, setCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("وجبات بابجي");

//     const [newCategoryName, setNewCategoryName] = useState('');
      

//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/FetchCategory')
//         .then(response => {
//           // console.log('Categories response:', response.data); // Log the response data
//           setCategories(response.data);
//           setSelectedCategory(response.data[0]?.name); // Set default category
//         })
//         .catch(error => {
//           console.error('Error fetching categories:', error);
//           // Handle error as needed
//         });
//     }, []);



//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${category}`)
//         .then(response => {
//           setItems(response.data.items);
//           setSelectedCategory(category);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/fetchallproduct')
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, []);

//     const addItem = (newItem) => {
//       axios.post('https://babgy.otrans.co/api/auth/addproduct', newItem)
//         .then(response => {
//           setItems([...items, response.data]);
//         })
//         .catch(error => {
//           console.error('Error adding item:', error);
//         });
//     };


//     useEffect(() => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${selectedCategory}`)
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       axios.delete(`https://babgy.otrans.co/api/auth/deleteproduct/${itemId}`)
//         .then(() => {
//           const updatedItems = items.filter(item => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch(error => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };
    

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.Bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing

//     const handleItemInputChange = (itemId, property, value) => {
//       const updatedItems = items.map(item => (item.id === itemId ? { ...item, [property]: value } : item));
//       setItems(updatedItems);
//     };

//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       axios.post(`https://babgy.otrans.co/api/auth/updateproduct/${itemId}`, editedItem)
//         .then(() => {
//           cancelEditingItem();
//         })
//         .catch(error => {
//           console.error('Error updating item:', error);
//           console.log('Error response data:', error.response.data); // Add this line
//         });
//     };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});


//     const handleAddCategory = async () => {
//       if (newCategoryName.trim() === '') {
//         // Handle empty category name as needed
//         return;
//       }
    
//       try {
//         const response = await axios.post('https://babgy.otrans.co/api/auth/addCategory', { name: newCategoryName });
//         console.log('Add Category Response:', response);
    
//         // Check the structure of the response data and update the code accordingly
//         const newCategory = response.data?.category; // Use optional chaining to avoid errors if category is not present
//         if (newCategory) {
//           setCategories(prevCategories => [...prevCategories, newCategory]);
//           setSelectedCategory(newCategory.name);
//           setNewCategoryName('');
//         } else {
//           // Handle the case when the response data doesn't contain the expected structure
//           console.error('Invalid response data structure:', response.data);
//         }
//       } catch (error) {
//         console.error('Error adding category:', error);
//       }
//     };

//     // Inside your Dashboard component, add a new function for handling category deletion
//       const removeCategory = async (categoryId) => {
//         try {
//           // Make a DELETE request to delete the category by id
//           await axios.delete(`https://babgy.otrans.co/api/auth/deleteCategory/${categoryId}`);

//           // Remove the deleted category from state
//           const updatedCategories = categories.filter(category => category.id !== categoryId);
//           setCategories(updatedCategories);

//           // If the deleted category was the currently selected category, reset the selected category
//           if (selectedCategory === categoryId) {
//             setSelectedCategory(updatedCategories[0]?.name);
//           }
//         } catch (error) {
//           console.error('Error deleting category:', error);
//         }
//       };
    
//     return (
//         <div className='dashboard'>
//           <div className="container">

//             <div className="add-categories">
//               <h2 className='text-danger'>اضافة قائمة جديدة</h2>
//               <input
//                 className='add-cat'
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//               />
//               <button onClick={handleAddCategory}>اضافة قائمة</button>
//             </div>

//             <div className="remove-category">
//             <h2 className='text-danger'>حذف قائمه</h2>
//               {categories.map((category) => (
//                 <li key={category.id}>
//                   <h2 className='text-danger' >{category.name}</h2>
//                   <button className="btn-icon bg-danger" onClick={() => removeCategory(category.id)}>
//                     <MdDeleteForever />
//                   </button>
//                 </li>
//               ))}
//             </div>

//             {/* NewItemForm Component (addItem) */}
//             { <NewItemForm onAddItem={addItem} categories={categories} />}
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                 {categories && categories.map((category) => (
//                   <li key={category.id} className={selectedCategory === category.name ? 'active' : ''}>
//                     <button onClick={() => handleCategoryClick(category.name)}>{category.name}</button>
//                   </li>
//                 ))}
//               </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{category}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.Bio}</td>
//                             <td className='text-center'><img className='img-dashboard' src={item.image} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

/*--------------------------------------------------------------------------------------------------*/
// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';
// import axios from 'axios';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [categories, setCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("وجبات بابجي");

//     const [newCategoryName, setNewCategoryName] = useState('');
      

//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/FetchCategory')
//         .then(response => {
//           // console.log('Categories response:', response.data); // Log the response data
//           setCategories(response.data);
//           setSelectedCategory(response.data[0]?.name); // Set default category
//         })
//         .catch(error => {
//           console.error('Error fetching categories:', error);
//           // Handle error as needed
//         });
//     }, []);



//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${category}`)
//         .then(response => {
//           setItems(response.data.items);
//           setSelectedCategory(category);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       axios.get('https://babgy.otrans.co/api/auth/fetchallproduct')
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, []);

//     useEffect(() => {
//       axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${selectedCategory}`)
//         .then(response => {
//           setItems(response.data.items);
//           setIsLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false);
//         });
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       axios.delete(`https://babgy.otrans.co/api/auth/deleteproduct/${itemId}`)
//         .then(() => {
//           const updatedItems = items.filter(item => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch(error => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };
    

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.Bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing

//     const handleItemInputChange = (itemId, property, value) => {
//       const updatedItems = items.map(item => (item.id === itemId ? { ...item, [property]: value } : item));
//       setItems(updatedItems);
//     };

//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       axios.post(`https://babgy.otrans.co/api/auth/updateproduct/${itemId}`, editedItem)
//         .then(() => {
//           cancelEditingItem();
//         })
//         .catch(error => {
//           console.error('Error updating item:', error);
//           console.log('Error response data:', error.response.data); // Add this line
//         });
//     };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});


//     const handleAddCategory = async () => {
//       if (newCategoryName.trim() === '') {
//         // Handle empty category name as needed
//         return;
//       }
    
//       try {
//         const response = await axios.post('https://babgy.otrans.co/api/auth/addCategory', { name: newCategoryName });
//         console.log('Add Category Response:', response);
    
//         // Check the structure of the response data and update the code accordingly
//         const newCategory = response.data?.category; // Use optional chaining to avoid errors if category is not present
//         if (newCategory) {
//           setCategories(prevCategories => [...prevCategories, newCategory]);
//           setSelectedCategory(newCategory.name);
//           setNewCategoryName('');
//         } else {
//           // Handle the case when the response data doesn't contain the expected structure
//           console.error('Invalid response data structure:', response.data);
//         }
//       } catch (error) {
//         console.error('Error adding category:', error);
//       }
//     };

//     // Inside your Dashboard component, add a new function for handling category deletion
//       const removeCategory = async (categoryId) => {
//         try {
//           // Make a DELETE request to delete the category by id
//           await axios.delete(`https://babgy.otrans.co/api/auth/deleteCategory/${categoryId}`);

//           // Remove the deleted category from state
//           const updatedCategories = categories.filter(category => category.id !== categoryId);
//           setCategories(updatedCategories);

//           // If the deleted category was the currently selected category, reset the selected category
//           if (selectedCategory === categoryId) {
//             setSelectedCategory(updatedCategories[0]?.name);
//           }
//         } catch (error) {
//           console.error('Error deleting category:', error);
//         }
//       };

    
//     return (
//         <div className='dashboard'>
//           <div className="container">

//             <div className="add-categories">
//               <h2 className='text-danger'>اضافة قائمة جديدة</h2>
//               <input
//                 className='add-cat'
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//               />
//               <button onClick={handleAddCategory}>اضافة قائمة</button>
//             </div>

//             <div className="remove-category">
//             <h2 className='text-danger'>حذف قائمه</h2>
//               {categories.map((category) => (
//                 <li key={category.id}>
//                   <h2 className='text-danger' >{category.name}</h2>
//                   <button className="btn-icon bg-danger" onClick={() => removeCategory(category.id)}>
//                     <MdDeleteForever />
//                   </button>
//                 </li>
//               ))}
//             </div>

//             <div>
//     <h2 className='title-add-pro'>اضافه منتج</h2>
//     <select
//   id="selectCategory"
//   className="form-select py-2 my-3"
//   aria-label="Select Category"
//   value={items.id_cat}
// >
//   <option value="" disabled>
//     اختر الفئة
//   </option>
//   {categories.map((category) => (
//     <option key={category.id} value={category.id}>
//       {category.name}
//     </option>
//   ))}
// </select>
// <input
//   id="productName"
//   className="form-control py-2 my-3"
//   type="text"
//   placeholder="Name"
// />
// <input
//   id="productPrice"
//   className="form-control py-2 my-3"
//   type="text"
//   placeholder="Price"
// />
// <input
//   id="productBio"
//   className="form-control py-2 my-3"
//   type="text"
//   placeholder="Bio"
// />
// <input
//   id="productImage"
//   className="form-control py-2 my-3"
//   type="file"
//   accept="image/*"
//   placeholder="Image"
// />
// <button className='btn bg-success'>اضافه</button>
//             </div>
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                 {categories && categories.map((category) => (
//                   <li key={category.id} className={selectedCategory === category.name ? 'active' : ''}>
//                     <button onClick={() => handleCategoryClick(category.name)}>{category.name}</button>
//                   </li>
//                 ))}
//               </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{category}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.Bio}</td>
//                             <td className='text-center'><img className='img-dashboard' src={item.image} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import './Dashboard.css'

// const Dashboard = () => {
//   // State variables
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState("وجبات بابجي");
//   const [items, setItems] = useState([]);

//   // Fetch product data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responseItems = await axios.get(
//           "https://babgy.otrans.co/api/auth/fetchallproduct"
//         );
//         setItems(responseItems.data.items || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetch category data on component mount
//   useEffect(() => {
//     axios
//       .get("https://babgy.otrans.co/api/auth/FetchCategory")
//       .then((response) => {
//         setCategories(response.data);
//         setCategory(response.data[0]?.name || ""); // Set default category
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//         // Handle error as needed
//       });
//   }, []);

//   // Filter items based on selected category
//   const filteredItems = items.filter((item) => item.category === category);

//   // JSX for rendering the component
//   return (
//     <div className='dashboard'>
//       <div className="container">
//         <div className="row">
//           {/* Category selection */}
//           <div className="col-xs-12">
//             <ul className="nav-tabs">
//               {categories.map((cat) => (
//                 <li
//                   key={cat.id}
//                   className={category === cat.name ? "active" : ""}
//                 >
//                   <button onClick={() => setCategory(cat.name)}>
//                     {cat.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Display filtered items */}
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Bio</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredItems.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <img
//                     className="img-dashboard"
//                       src={`https://babgy.otrans.co/product/${item.image}`}
//                       alt="img-food"
//                     />
//                   </td>
//                   <td>
//                     <h4>{item.name}</h4>
//                   </td>
//                   <td>
//                     <p>{item.Bio}</p>
//                   </td>
//                   <td>
//                     <span>{item.price} ريال</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
/************************************************************************************************** */
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaArrowDown } from "react-icons/fa";
// import './Dashboard.css'

// const Dashboard = () => {
//   // State variables
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [activeCategoryId, setActiveCategoryId] = useState(null);
//   const [newCategoryName, setNewCategoryName] = useState(""); // New category name input
//   const [editCategoryValue, setEditCategoryValue] = useState("");
//   const [editingStates, setEditingStates] = useState({});
//   // State variables for new product input
//   // State variables for new product input
//   const [newProductName, setNewProductName] = useState('');
//   const [newProductPrice, setNewProductPrice] = useState('');
//   const [newProductImage, setNewProductImage] = useState('');
//   const [newProductBio, setNewProductBio] = useState('');
//   const [newProductIdCat, setNewProductIdCat] = useState('');

//   // Function to fetch products based on category ID
//   const fetchProductsByCategory = (categoryId) => {
//     axios
//         .get(`https://babgy.otrans.co/api/auth/FetchproductbelongToCate/${categoryId}`)
//         .then((response) => {
//             setProducts(response.data.items);
//             setActiveCategoryId(categoryId);
//         })
//         .catch((error) => {
//             console.error(`Error fetching products for category ${categoryId}:`, error);
//             // Handle error as needed
//         });
// };

//   // Function to handle category click events
//   const handleCategoryClick = (categoryId) => {
//       fetchProductsByCategory(categoryId);
//       console.log(categoryId)
//   };

//   // Fetch category data on component mount
//   useEffect(() => {
//     axios
//       .get("https://babgy.otrans.co/api/auth/FetchCategory")
//       .then((response) => {
//         setCategories(response.data);
//           // Call handleCategoryClick with the ID of the first category
//           if (response.data.length > 0) {
//             handleCategoryClick(response.data[0].id);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//         // Handle error as needed
//       });
//   }, []);

//   // Function to add a new category
//   const handleAddCategory = async () => {
//     try {
//       // Make a request to add a new category
//       const response = await axios.post(
//         "https://babgy.otrans.co/api/auth/addCategory",
//         { name: newCategoryName }
//       );

//       // Update the categories state with the new category
//       setCategories((prevCategories) => [
//         ...prevCategories,
//         { id: response.data.id, name: newCategoryName },
//       ]);

//       // Reset the input field
//       setNewCategoryName("");
//     } catch (error) {
//       console.error("Error adding category:", error);
//       // Handle error as needed
//     }
//   };

//   // Function to delete a category
//   const handleDeleteCategory = async (categoryId) => {
//     try {
//       // Make a request to delete the category
//       const response = await axios.delete(
//         `https://babgy.otrans.co/api/auth/deleteCategory/${categoryId}`
//       );

//       // Check if the deletion was successful (you might have a specific response from the server)
//       if (response.data.success) {
//         // Update the categories state by removing the deleted category
//         setCategories((prevCategories) =>
//           prevCategories.filter((cat) => cat.id !== categoryId)
//         );
//       } else {
//         console.error("Error deleting category:", response.data.message);
//         // Handle error as needed
//       }
//     } catch (error) {
//       console.error("Error deleting category:", error);
//       // Handle error as needed
//     }
//   };

//   // Function to update a category
//   const handleEditCategory = (categoryId, categoryName) => {
//     setEditingStates((prevStates) => ({
//       ...prevStates,
//       [categoryId]: true,
//     }));
//     setEditCategoryValue(categoryName);
//   };

//   const handleSaveChanges = async (categoryId) => {
//     try {
//       // Make a request to update the category name
//       await axios.post(
//         `https://babgy.otrans.co/api/auth/updateCategory/${categoryId}`,
//         { name: editCategoryValue }
//       );

//       // Update the categories state with the edited category name
//       setCategories((prevCategories) =>
//         prevCategories.map((cat) =>
//           cat.id === categoryId ? { ...cat, name: editCategoryValue } : cat
//         )
//       );

//       setEditingStates((prevStates) => ({
//         ...prevStates,
//         [categoryId]: false,
//       }));
//       setEditCategoryValue("");

//     } catch (error) {
//       console.error("Error editing category:", error);
//       // Handle error as needed
//     }
//   };

//   // Function to handle adding a new product
//  // Function to handle adding a new product
//  const handleAddProduct = async () => {
//   try {
//     // Make a request to add a new product
//     const response = await axios.post(
//       'https://babgy.otrans.co/api/auth/addproduct',
//       {
//         name: newProductName,
//         price: newProductPrice,
//         image: newProductImage,
//         Bio: newProductBio,
//         id_cat: newProductIdCat,
//       }
//     );

//     // Check if the addition was successful (you might have a specific response from the server)
//     if (response.data.success) {
//       // Update the products state with the new product
//       setProducts((prevProducts) => [
//         ...prevProducts,
//         {
//           id: response.data.id,
//           name: newProductName,
//           price: newProductPrice,
//           image: newProductImage,
//           Bio: newProductBio,
//           id_cat: newProductIdCat,
//         },
//       ]);

//       // Reset the input fields
//       setNewProductName('');
//       setNewProductPrice('');
//       setNewProductImage('');
//       setNewProductBio('');
//       setNewProductIdCat('');
//     } else {
//       console.error('Error adding product:', response.data.message);
//       // Handle error as needed
//     }
//   } catch (error) {
//     console.error('Error adding product:', error);
//     // Handle error as needed
//   }
// };

//   // JSX for rendering the component
//   return (
//     <div className='dashboard'>
//       <div className="container">
//         <div className="row">
//           {/* Add new category input and button */}
//           <div className="col-xs-12">
//             <div className="add-cat-container">
//               <h3 className="special-header-dash">إضافة قائمة جديدة</h3>
//               <input
//                 className="form-contact form-group form-controll"
//                 type="text"
//                 placeholder="اسم الفئة الجديدة"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//               />
//               <button className="btn btn-success bg-success" onClick={handleAddCategory}>إضافة</button>
//             </div>
//           </div>
          
//           {/* Add new product input and button */}
//       <div className='col-xs-12'>
//         <div className='add-product-container mt-4'>
//           <h3 className='special-header-dash'>إضافة منتج جديد</h3>
//           <select
//             className='form-contact form-group form-controll d-block mb-4'
//             value={newProductIdCat}
//             onChange={(e) => setNewProductIdCat(e.target.value == 21)}
//           >
//             <option value='' disabled>Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat.id} value={cat.id}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//           <input
//             className='form-contact form-group form-controll'
//             type='text'
//             placeholder='اسم المنتج'
//             value={newProductName}
//             onChange={(e) => setNewProductName(e.target.value)}
//           />
//           <input
//             className='form-contact form-group form-controll'
//             type='text'
//             placeholder='السعر'
//             value={newProductPrice}
//             onChange={(e) => setNewProductPrice(e.target.value)}
//           />
//           <input
//             className='form-contact form-group form-controll'
//             type='file'
//             accept='image/*'
//             onChange={(e) => setNewProductImage(e.target.files[0])}
//           />
//           <input
//             className='form-contact form-group form-controll'
//             type='text'
//             placeholder='نبذة تعريفية'
//             value={newProductBio}
//             onChange={(e) => setNewProductBio(e.target.value)}
//           />
//           {/* Use a dropdown/select for the product category */}
          
//           <button className='btn btn-success bg-success' onClick={handleAddProduct}>
//             إضافة
//           </button>
//         </div>
//       </div>

//           {/* Category selection */}
//           <div className="col-xs-12">
//             <div className="category-selection-content">
//               <h3 className="special-header-dash"> جميع القوائم الموجوده <FaArrowDown /></h3>
//               <ul className="nav-tabs">
//                 {categories.map((cat, index) => (
//                   <li
//                     key={`${cat.name}_${index}`}
//                     className={activeCategoryId === cat.id ? 'active' : ''}
//                   >
//                     {editingStates[cat.id] ? (
//                       <>
//                         <input
//                           type="text"
//                           placeholder={cat.name}
//                           value={editCategoryValue}
//                           onChange={(e) => setEditCategoryValue(e.target.value)}
//                         />
//                         <button onClick={() => handleSaveChanges(cat.id)}>حفظ التغييرات</button>
//                       </>
//                     ) : (
//                       <>
//                         <button onClick={() => handleCategoryClick(cat.id)}>
//                           {cat.name}
//                         </button>
//                         <div className="del-add-btns-cat d-flex">
//                           <button onClick={() => handleEditCategory(cat.id, cat.name)}>تعديل</button>
//                           <button onClick={() => handleDeleteCategory(cat.id)}>حذف</button>
//                         </div>
//                       </>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Category Tables */}
//           <div className="col-xs-12">
//             <div className="category-tables-content">
//               {/* <h3 className="cat-table-title">{} اسم القائمة</h3> */}
//               {/* Display the number of products */}
//               <div className="">
//                 {/* <p>عدد المنتجات: {filteredItems.length}</p> */}
//               </div>
//               {/* Display filtered items */}
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">عدد</th>
//                     <th scope="col">الاسم</th>
//                     <th scope="col">السعر</th>
//                     <th scope="col">نبزه تعرفيه</th>
//                     <th scope="col">مصدر الصوره</th>
//                     <th scope="col">تعديل وحزف</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((item, index) => (
//                     <tr key={item.id}>
//                       <td>{index + 1}</td>
//                       <td>{item.name}</td>
//                       <td>{item.price} جنيه</td>
//                       <td>{item.Bio}</td>
//                       <td>
//                         <img
//                           className="img-dashboard"
//                           src={`https://babgy.otrans.co/product/${item.image}`}
//                           alt="img-food"
//                         />
//                       </td>
//                       <td>
//                         {/* Add edit and delete buttons or links here */}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


/******************* */





import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowDown } from "react-icons/fa";
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import './Dashboard.css'

const Dashboard = () => {
  // State variables
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState(""); // New category name input
  const [showCategoryAddedMessage, setShowCategoryAddedMessage] = useState(false);
  const [showCategoryErrorMessage, setShowCategoryErrorMessage] = useState(false);
  const [categoryDeleted, setCategoryDeleted] = useState(false);
  const [editCategoryValue, setEditCategoryValue] = useState("");
  const [editingStates, setEditingStates] = useState({});
  const [deleteMessages, setDeleteMessages] = useState({});
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [showProductAddedMessage, setShowProductAddedMessage] = useState(false);
  const [showProductErrorMessage, setShowProductErrorMessage] = useState(false);

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({
        // Initialize newItem with default values
        id_cat: '',
        name: '',
        price: '',
        image: null,
        Bio: '',
    });
    const [editingProductId, setEditingProductId] = useState(null);
    const [editItemValues, setEditItemValues] = useState({
      name: '',
      price: '',
      Bio: '',
      image: null,
    });


  // Function to fetch products based on category ID
  const fetchProductsByCategory = (categoryId) => {
    axios
        .get(`https://babgy.otrans.co/api/auth/FetchproductbelongToCate/${categoryId}`)
        .then((response) => {
            setProducts(response.data.items);
            setActiveCategoryId(categoryId);
        })
        .catch((error) => {
            console.error(`Error fetching products for category ${categoryId}:`, error);
            // Handle error as needed
        });
};

  // Function to handle category click events
  const handleCategoryClick = (categoryId) => {
      fetchProductsByCategory(categoryId);
      console.log(categoryId)
  };

  // Fetch category data on component mount
  useEffect(() => {
    axios
      .get("https://babgy.otrans.co/api/auth/FetchCategory")
      .then((response) => {
        setCategories(response.data);
          // Call handleCategoryClick with the ID of the first category
          if (response.data.length > 0) {
            handleCategoryClick(response.data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        // Handle error as needed
      });
  }, []);

  // Function to add a new category
const handleAddCategory = async () => {
  try {
    // Make a request to add a new category
    const response = await axios.post(
      "https://babgy.otrans.co/api/auth/addCategory",
      { name: newCategoryName }
    );

    // Update the categories state with the new category
    setCategories((prevCategories) => [
      ...prevCategories,
      { id: response.data.id, name: newCategoryName },
    ]);

    // Reset the input field
    setNewCategoryName("");

    // Show success message and hide after 3 seconds
    setShowCategoryAddedMessage(true);
    setTimeout(() => setShowCategoryAddedMessage(false), 3000);
  } catch (error) {
    console.error("Error adding category:", error);

    // Show error message and hide after 3 seconds
    setShowCategoryErrorMessage(true);
    setTimeout(() => setShowCategoryErrorMessage(false), 3000);
  }
};

  // Function to delete a category
const handleDeleteCategory = async (categoryId) => {
  // Display a confirmation dialog before proceeding with deletion
  const confirmDelete = window.confirm("هل تريد حذف القائمة؟");

  if (!confirmDelete) {
    return; // User canceled the deletion
  }

  try {
    // Make a request to delete the category
    const response = await axios.delete(
      `https://babgy.otrans.co/api/auth/deleteCategory/${categoryId}`
    );

    // Check if the deletion was successful (you might have a specific response from the server)
    if (response.data.success) {
      // Update the categories state by removing the deleted category
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat.id !== categoryId)
      );
      // Set success message for the specific category
      setCategoryDeleted((prevCategories) => ({
        ...prevCategories,
        [categoryId]: "تم حذف المنتج",
      }));
    } else {
      console.error("Error deleting category:", response.data.message);
      // Set error message for the specific category
      setCategoryDeleted((prevCategories) => ({
        ...prevCategories,
        [categoryId]: "تم حذف المنتج.",
      }));
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    // Handle error as needed
  }
};

  // Function to update a category
  const handleEditCategory = (categoryId, categoryName) => {
    setEditingStates((prevStates) => ({
      ...prevStates,
      [categoryId]: true,
    }));
    setEditCategoryValue(categoryName);
  };

  const handleSaveChanges = async (categoryId) => {
    try {
      // Make a request to update the category name
      await axios.post(
        `https://babgy.otrans.co/api/auth/updateCategory/${categoryId}`,
        { name: editCategoryValue }
      );

      // Update the categories state with the edited category name
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === categoryId ? { ...cat, name: editCategoryValue } : cat
        )
      );

      setEditingStates((prevStates) => ({
        ...prevStates,
        [categoryId]: false,
      }));
      setEditCategoryValue("");

    } catch (error) {
      console.error("Error editing category:", error);
      // Handle error as needed
    }
  };

    // Function to add Item a category
const addItem = () => {
  console.log('New Item:', newItem);

  if (!newItem || Object.keys(newItem).length === 0) {
    console.error('New item is empty or undefined.');
    return;
  }

  const formData = new FormData();
  for (const key in newItem) {
    formData.append(key, newItem[key]);
  }

  fetch('https://babgy.otrans.co/api/auth/addproduct', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error(`Error adding item: ${response.statusText}`);
      }
      return response.json(); // Assuming the server returns JSON
    })
    .then(data => {
      console.log('Data:', data);
      console.log('Item added successfully!');
      setItems([...items, newItem]);
      setNewItem({
        id_cat: '',
        name: '',
        price: '',
        image: '',
        Bio: '',
      });

      // Show success message and hide after 3 seconds
      setShowProductAddedMessage(true);
      setTimeout(() => setShowProductAddedMessage(false), 3000);
    })
    .catch(error => {
      console.error('Error adding item:', error);

      // Show error message and hide after 3 seconds
      setShowProductErrorMessage(true);
      setTimeout(() => setShowProductErrorMessage(false), 3000);
    });
};
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setNewItem((prevItem) => ({
        ...prevItem,
        image: file,
      }));
    };

  // Function to delete a product
  const handleDeleteProduct = async (productId) => {
    // Display a confirmation dialog before proceeding with deletion
    const confirmDelete = window.confirm("هل تريد حذف المنتج؟");

    if (!confirmDelete) {
      return; // User canceled the deletion
    }

    try {
      // Set the product ID being deleted
      setDeletingProduct(productId);

      // Make a request to delete the product
      const response = await axios.delete(
        `https://babgy.otrans.co/api/auth/deleteproduct/${productId}`
      );

      // Check if the deletion was successful (you might have a specific response from the server)
      if (response.data.success) {
        // Update the products state by removing the deleted product
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );

        // Set success message for the specific product
        setDeleteMessages((prevMessages) => ({
          ...prevMessages,
          [productId]: "تم حذف المنتج",
        }));
      } else {
        console.error("Error deleting product:", response.data.message);

        // Set error message for the specific product
        setDeleteMessages((prevMessages) => ({
          ...prevMessages,
          [productId]: "تم حذف المنتج.",
        }));
      }
    } catch (error) {
      console.error("Error deleting product:", error);

      // Set error message for the specific product
      setDeleteMessages((prevMessages) => ({
        ...prevMessages,
        [productId]: "تم حذف المنتج.",
      }));
    } finally {
      // Clear the deletingProduct state variable after the operation is complete
      setDeletingProduct(null);
    }
  };


// Add these functions
const handleEditProduct = (item) => {
  setEditingProductId(item.id);
  setEditItemValues({
    name: item.name,
    price: item.price,
    Bio: item.Bio,
    image: item.image,
  });
};

const handleUpdateProduct = async (productId) => {
  try {
    const formData = new FormData();
    formData.append('name', editItemValues.name);
    formData.append('price', editItemValues.price);
    formData.append('Bio', editItemValues.Bio);

    // Check if the image is updated
    if (editItemValues.image instanceof File) {
      formData.append('image', editItemValues.image);
    }

    await axios.post(
      `https://babgy.otrans.co/api/auth/updateproduct/${productId}`,
      formData
    );

    // Update the products state with the edited product details
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, ...editItemValues }
          : product
      )
    );

    setEditingProductId(null);
    setEditItemValues({
      name: '',
      price: '',
      Bio: '',
      image: null,
    });
  } catch (error) {
    console.error('Error updating product:', error);
    // Handle error as needed
  }
};

const cancelEdit = () => {
  setEditingProductId(null);
  setEditItemValues({
    name: '',
    price: '',
    Bio: '',
    image: null,
  });
};


  // JSX for rendering the component
  return (
    <div className='dashboard'>
      <div className="container">
        <div className="row">
          {/* Add new category input and button */}
          <div className="col-xs-12">
            <div className="add-cat-container">
              <h3 className="special-header-dash">إضافة قائمة جديدة <FaArrowDown /></h3>
              <input
                className="form-contact form-group form-controll"
                type="text"
                placeholder="اسم القائمة الجديدة"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button className="btn btn-success bg-success" onClick={handleAddCategory}>إضافة قائمة</button>

              {/* Display success message when a new category is added */}
              {showCategoryAddedMessage && <p className="added-alert">تمت إضافة قائمة جديدة</p>}

              {/* Display error message if there was an error adding the category */}
              {showCategoryErrorMessage && <p className="error-alert">حدث خطأ في الإضافة. برجاء تحميل الصفحة.</p>}
            </div>
          </div>
          
          {/* Add new product input and button */}
          <div className='col-xs-12'>
            <div className='add-product-container mt-4'>
            <div>
                <h3 className="special-header-dash">اضافة منتج جديد <FaArrowDown /></h3>
                {/* Input fields for adding items */}
                <select
                    className='form-controll d-block mb-4'
                    value={newItem.id_cat}
                    onChange={(e) => setNewItem({ ...newItem, id_cat: e.target.value })}
                  >
                    <option  key="" value="" disabled>اختر القائمة</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                  <input
                  className="form-controll"
                  type="text"
                  placeholder="اسم المنتج"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                  <input
                  className="form-controll"
                  type="text"
                  placeholder="السعر"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  />
                  <input
                  className="form-controll"
                  type="text"
                  placeholder="نبزه تعريفية"
                  value={newItem.Bio}
                  onChange={(e) => setNewItem({ ...newItem, Bio: e.target.value })}
                  />
                  <input
                  className="form-controll"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <button onClick={addItem} className="btn bg-success">اضافة منتج</button>

                  {/* Display success message when a new product is added */}
                  {showProductAddedMessage && <p className="added-alert">تمت إضافة منتج جديد</p>}

                  {/* Display error message if there was an error adding the product */}
                  {showProductErrorMessage && <p className="error-alert">حدث خطأ في إضافة المنتج. برجاء كل البيانات.</p>}
            </div>
              
            </div>
          </div>

          {/* Category selection */}
          <div className="col-xs-12">
            <div className="category-selection-content">
              <h3 className="special-header-dash"> جميع القوائم الموجودة <FaArrowDown /></h3>
              <p>عدد القوائم: {categories.length}</p>
              <ul className="nav-tabs">
                {categories.map((cat,index) => (
                  <li
                    // key={`${cat.name}_${index}`}
                    // key={cat.id}
                    key={`${cat.id}_${index}`}
                    className={activeCategoryId === cat.id ? 'active' : ''}
                  >
                    {editingStates[cat.id] ? (
                      <>
                        <input
                          className="form-controll"
                          type="text"
                          placeholder={cat.name}
                          value={editCategoryValue}
                          onChange={(e) => setEditCategoryValue(e.target.value)}
                        />
                        <button  onClick={() => handleSaveChanges(cat.id)}>حفظ التغييرات</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleCategoryClick(cat.id)}>
                          {cat.name}
                        </button>
                        <div className="del-add-btns-cat d-flex">
                          <button className="text-warning" onClick={() => handleEditCategory(cat.id, cat.name)}>تعديل</button>
                          <button className="text-danger" onClick={() => handleDeleteCategory(cat.id)}>حذف</button>
                        </div>
                        {/* Display deletion success message for the specific category */}
                        {categoryDeleted[cat.id] && (
                          <span className="delete-success-message error-delete">تم الحذف</span>
                        )}
                        
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Tables */}
          <div className="col-xs-12">
            <div className="category-tables-content">
            <h3 className="cat-table-title">
              {categories.find((cat) => cat.id === activeCategoryId)?.name || 'اسم القائمة'}
            </h3>
              {/* Display the number of products */}
              <div className="">
              <p>عدد المنتجات: {products.length}</p>
              </div>
              {/* Display filtered items */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">عدد</th>
                    <th scope="col">الاسم</th>
                    <th scope="col">السعر</th>
                    <th scope="col">نبزه تعرفيه</th>
                    <th scope="col">مصدر الصوره</th>
                    <th scope="col">تعديل وحزف</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                          {editingProductId === item.id ? (
                            <input
                            className="form-controll-table"
                              type="text"
                              value={editItemValues.name}
                              onChange={(e) =>
                                setEditItemValues((prevValues) => ({
                                  ...prevValues,
                                  name: e.target.value,
                                }))
                              }
                              />
                            ) : (
                              item.name
                            )}
                          </td>
                          <td>
                            {editingProductId === item.id ? (
                              <input
                                className="form-controll-table"
                                type="text"
                                value={editItemValues.price}
                                onChange={(e) =>
                                  setEditItemValues((prevValues) => ({
                                    ...prevValues,
                                    price: e.target.value,
                                  }))
                                }
                              />
                            ) : (
                              `${item.price} جنيه`
                            )}
                          </td>
                          <td>
                            {editingProductId === item.id ? (
                              <input
                                className="form-controll-table"
                                type="text"
                                value={editItemValues.Bio}
                                onChange={(e) =>
                                  setEditItemValues((prevValues) => ({
                                    ...prevValues,
                                    Bio: e.target.value,
                                  }))
                                }
                              />
                            ) : (
                              item.Bio
                            )}
                          </td>
                          <td key={editItemValues.image}>
                            {editingProductId === item.id ? (
                              <>
                                <div className="image-and-input-container">
                                  <img
                                    className="img-dashboard"
                                    src={
                                      editItemValues.image instanceof File
                                        ? URL.createObjectURL(editItemValues.image)
                                        : editItemValues.image
                                          ? `https://babgy.otrans.co/product/${editItemValues.image}`
                                          : ''
                                    }
                                    alt="img-food"
                                  />
                                  <input
                                    className="form-controll-table"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                      setEditItemValues((prevValues) => ({
                                        ...prevValues,
                                        image: e.target.files[0],
                                      }))
                                    }
                                  />
                                </div>
                              </>
                            ) : (
                              <img
                                className="img-dashboard"
                                src={`https://babgy.otrans.co/product/${item.image}`}
                                alt="img-food"
                              />
                            )}
                          </td>
                      <td>
                        <div className="delete-and-edite-btns">
                          <div className="delete-btn-content">
                            {/* Display delete button or success message */}
                            {deletingProduct ? (
                              <span className="text-danger">جاري الحذف...</span>
                            ) : (
                              <button
                                className="table-list-btn btn-icon bg-danger"
                                onClick={() => handleDeleteProduct(item.id)}
                              >
                                <MdDeleteForever />
                              </button>
                            )}

                            {/* Display delete message for the specific product */}
                            {deleteMessages[item.id] && <h4 className="error-delete">{deleteMessages[item.id]}</h4>}
                          </div>
                          <div className="edit-btn-content">
                          {editingProductId === item.id ? (
                            <>
                              <button className="btn bg-success mt-2" onClick={() => handleUpdateProduct(item.id)}>حفظ</button>
                              <button className="btn bg-info mt-2" onClick={() => cancelEdit()}>إلغاء</button>
                            </>
                          ) : (
                            <button
                              className="table-list-btn btn-icon bg-primary"
                              onClick={() => handleEditProduct(item)}
                            >
                              <AiFillEdit />
                            </button>
                          )}
                          </div>
                        </div>
                          
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


