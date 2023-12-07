// import { useState } from 'react';
// import { AiFillEdit } from 'react-icons/ai';

//     const EditItem = ({
//     item,
//     handleItemInputChange,
//     saveEditedItem,
//     cancelEditingItem,
//     isEditing,
//     }) => {
//     const [editedItem, setEditedItem] = useState({ ...item });

//     const handleInputChange = (property, value) => {
//         setEditedItem({ ...editedItem, [property]: value });
//     };

//     const renderEditControls = () => {
//         return (
//         <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={editedItem.category}
//             onChange={(e) => handleInputChange('category', e.target.value)}
//             >
//             <option value="popular">popular</option>
//             <option value="drinks">drinks</option>
//             <option value="chicken">chicken</option>
//             <option value="sweets">sweets</option>
//             <option value="salad">salad</option>
//             <option value="barbecue">barbecue</option>
//             <option value="meat">meat</option>
//             </select>

//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.name}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.img}
//             onChange={(e) => handleInputChange('img', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.price}
//             onChange={(e) => handleInputChange('price', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.bio}
//             onChange={(e) => handleInputChange('bio', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(editedItem)}>حفظ</button>
//             <button className="btn bg-info" onClick={cancelEditingItem}>الغاء</button>
//         </div>
//         );
//     };

//     return (
//         <div>
//         {isEditing ? renderEditControls() : <button className="btn-icon bg-primary" onClick={startEditingItem}><AiFillEdit /></button>}
//         </div>
//     );
// };

// export default EditItem;






// EditItem.js
// import  { useState } from 'react';
// // import { AiFillEdit } from 'react-icons/ai';
// // import { MdDeleteForever } from 'react-icons/md';

// const EditItem = ({ item, handleItemEdit }) => {
//     const [editedItem, setEditedItem] = useState({ ...item });

//     const handleInputChange = (property, value) => {
//         setEditedItem({ ...editedItem, [property]: value });
//     };

//         return (
//         <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={editedItem.category}
//             onChange={(e) => handleInputChange('category', e.target.value)}
//             >
//             <option value="popular">popular</option>
//             <option value="drinks">drinks</option>
//             <option value="chicken">chicken</option>
//             <option value="sweets">sweets</option>
//             <option value="salad">salad</option>
//             <option value="barbecue">barbecue</option>
//             <option value="meat">meat</option>
//             </select>

//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.name}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.img}
//             onChange={(e) => handleInputChange('img', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.price}
//             onChange={(e) => handleInputChange('price', e.target.value)}
//             />
//             <input
//             className="form-control py-2 my-3"
//             type="text"
//             value={editedItem.bio}
//             onChange={(e) => handleInputChange('bio', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(editedItem)}>حفظ</button>
//             <button className="btn bg-info" onClick={cancelEditingItem}>الغاء</button>
//         </div>
//         );
//     };


// export default EditItem;



















































