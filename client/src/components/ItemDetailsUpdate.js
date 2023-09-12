// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import ResponsiveAppBar from "./ResponsiveAppBar";
// import Footer from "./Footer";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function EditItemForm() {
//   const { itemId } = useParams();
//   const navigate = useNavigate();

//   const categories = ["Casual/Streetwear", "Formal", "Athletic", "Lounge"];

//   const subCategories = {
//     "Casual/Streetwear": [
//       "Tops",
//       "Bottoms",
//       "Shoes",
//       "Accessories",
//       "Underwear",
//       "Jackets",
//       "Other",
//     ],
//     // Add subcategories for other categories
//   };

//   const [closets, setClosets] = useState([]);
//   const [itemData, setItemData] = useState({
//     item_name: "",
//     category: "",
//     subcategory: "",
//     color: "",
//     purchase_date: "",
//     img_src: "",
//     description: "",
//     season: "",
//     closet_id: "",
//     last_worn_date: "",
//     size: "",
//     brand_name: "",
//   });

//   useEffect(() => {
//     async function fetchItemDetails() {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/items/${itemId}`,
//           {
//             withCredentials: true,
//           }
//         );

//         if (response.status === 200) {
//           const itemDetails = response.data;
//           setItemData(itemDetails);
//           console.log("FetchitemDetails---------", itemDetails);
//         } else {
//           // Handle error response
//           console.log("Failed to fetch item details");
//         }
//       } catch (error) {
//         // Handle network error
//         console.error(error);
//       }
//     }
    
//     fetchItemDetails();
//   }, [itemId]);
  
//   console.log("FetchItemData-------", itemData)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setItemData({ ...itemData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const { name, value } = e.target;
//     setItemData({
//       ...itemData,
//       [name]: value,
//       subcategory: subCategories[value][0],
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const base64Img = event.target.result;
//         setItemData({ ...itemData, img_src: base64Img });
//       };
//       reader.onerror = (error) => {
//         console.error("Error reading the file:", error);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:8080/items/${itemId}`,
//         itemData,
//         {
//           withCredentials: true,
//         }
//       );

//       if (response.status === 200) {
//         console.log("Item updated successfully", itemData);
//         navigate("/items"); // Redirect to the items list page
//       } else {
//         console.log("Item update failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="edit-item">
//       <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Item Name"
//               name="item_name"
//               // value={itemData.item_name}
//               onChange={handleInputChange}
//               required
//               defaultValue={itemData.item_name}
//               placeholder="Watch"
//             />
//           </Grid>
//           {/* <Grid item xs={6}>
//             <FormControl fullWidth>
//               <InputLabel>Category</InputLabel>
//               <Select
//                 name="category"
//                 value={itemData.category}
//                 onChange={handleCategoryChange}
//                 required
//               >
//                 {categories.map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid> */}
//           {/* <Grid item xs={6}>
//             <FormControl fullWidth>
//               <InputLabel>Sub-Category</InputLabel>
//               <Select
//                 name="subcategory"
//                 value={itemData.subcategory}
//                 onChange={handleInputChange}
//                 required
//               >
//                 {subCategories[itemData.category].map((subcategory) => (
//                   <MenuItem key={subcategory} value={subcategory}>
//                     {subcategory}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid> */}
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Color"
//               name="color"
//               value={itemData.color}
//               onChange={handleInputChange}
//               required
//               placeholder="Red"
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               type="date"
//               label="Purchase Date"
//               name="purchase_date"
//               value={itemData.purchase_date}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <input
//               name="img_src"
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               type="text"
//               label="Description"
//               name="description"
//               value={itemData.description}
//               onChange={handleInputChange}
//               placeholder="My favorite watch"
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl fullWidth>
//               <InputLabel>Season</InputLabel>
//               <Select
//                 name="season"
//                 value={itemData.season}
//                 onChange={handleInputChange}
//                 placeholder="Winter"
//               >
//                 <MenuItem value="ALL">All Seasons</MenuItem>
//                 <MenuItem value="Winter">Winter</MenuItem>
//                 <MenuItem value="Summer">Summer</MenuItem>
//                 <MenuItem value="Spring">Spring</MenuItem>
//                 <MenuItem value="Fall">Fall</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl fullWidth>
//               <InputLabel>Closet</InputLabel>
//               <Select
//                 name="closet_id"
//                 value={itemData.closet_id}
//                 onChange={handleInputChange}
//                 required
//               >
//                 {closets.map((closet) => (
//                   <MenuItem key={closet.id} value={closet.id}>
//                     {closet.closet_name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               type="date"
//               label="Last Use Date"
//               name="last_worn_date"
//               value={itemData.last_worn_date}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl fullWidth>
//               <InputLabel>Size</InputLabel>
//               <Select
//                 name="size"
//                 value={itemData.size}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <MenuItem value="NA">Not Applicable</MenuItem>
//                 <MenuItem value="Small">Small</MenuItem>
//                 <MenuItem value="Medium">Medium</MenuItem>
//                 <MenuItem value="Large">Large</MenuItem>
//                 <MenuItem value="XL">XL</MenuItem>
//                 <MenuItem value="XXL">XXL</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               type="text"
//               label="Brand"
//               name="brand_name"
//               value={itemData.brand_name}
//               onChange={handleInputChange}
//               placeholder="Gucci"
//             />
//           </Grid>
//         </Grid>
//         <Button type="submit" variant="contained" color="primary">
//           Update Item
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default EditItemForm;
