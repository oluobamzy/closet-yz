import { useState } from 'react';
import './AddItem.css';

export default function AddItem() {
  const [formData, setFormData] = useState({
    file: null,
    itemName: "",
    description: "",
    season: "",
    category: "",
    brandName: "",
    colour: "",
    size: "",
    lastWornDate: "",
    purchaseDate: ""
  });

  const submit = async (event) => {
    event.preventDefault();

    // Access the form data from the state object
    const { file, itemName, description, brand,season,category,colour,size,lastWornDate,purchaseDate } = formData;

    // Send the form data to the server
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    // If the input is a file input, update the 'file' property
    if (name === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // Use the selected file
      });
    } else {
      // Otherwise, update other form fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="AddItem">
      <form onSubmit={submit}>
        <input
          name="file"
          onChange={handleInputChange}
          type="file"
          accept="image/*"
        />
        <input
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="Description"
        />
        <input
          name="itemName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="brandName"
          onChange={handleInputChange}
          type="text"
          placeholder="Brand Name"
        />
        <input
          name="season"
          type="text"
          onChange={handleInputChange}
          placeholder="season"
        />
        <input
          name="category"
          type="text"
          onChange={handleInputChange}
          placeholder="category"
        />
        <input
          name="colour"
          type="text"
          onChange={handleInputChange}
          placeholder="colour"
        />
        <input
          name="size"
          type="text"
          onChange={handleInputChange}
          placeholder="size"
        />
        <input
          name="lastWornDate"
          type="date"
          onChange={handleInputChange}
          placeholder="lastWornDate"
        />
        <input
          name="purchaseDate"
          type="date"
          onChange={handleInputChange}
          placeholder="purchaseDate"
        />
        <div className='addItem-btn'>
         <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
