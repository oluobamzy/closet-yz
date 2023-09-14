import "./ItemDetails.css";
import { useState, useEffect } from "react";
import "./ItemDetailsUpdate.css";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useItems } from "./ItemsContext";

const ItemDetails = (props) => {
  const list = useItems();
  console.log("ItemDetails ------------->", list)
  const [updateMode, setUpdateMode] = useState(false);
  const handleUpdateButtonClick = () => {
    setUpdateMode(true); // Set updateMode to true when the button is clicked
  };
  const { itemId } = useParams();
  const filteredList = list.filter((item) => item.id === parseInt(itemId));
  const imgSRC = filteredList[0]?.img_src || "default-image.jpg";
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#F1F0E8",
  }));

  const StyledBanner = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#F1F0E8",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    height: "50%",
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update the item here
    // You can access the updated values using e.target.fieldName.value

    const formData = {
      description: e.target.description.value,
      closet_name: e.target.closet_name.value,
      season: e.target.season.value,
      brand_name: e.target.brand_name.value,
      category: e.target.category.value,
      color: e.target.color.value,
      size: e.target.size.value,
      last_worn_date: e.target.last_worn_date.value,
      purchase_date: e.target.purchase_date.value,
    };

    const itemIdToInteger = parseInt(itemId, 10); // Convert itemIdString to an integer

    const requestData = {
      formData: formData, // Assuming formData is a variable with the second parameter
      itemId: itemIdToInteger, // Assuming itemId is a variable with the first parameter
    };

    console.log("handleSubmit Item Details props.itemId------------->", itemId);
    console.log("handleSubmit Formdata------------->", formData);
    console.log("handleSubmit requestData------------->", requestData);

    fetch(`http://localhost:8080/items/${itemId}`, {
      method: "PUT", // Use the appropriate HTTP method for deletion
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle success, if needed
        console.log("UpdateDataSentGood--------->", requestData);
      })
      .then(() => {
        // Set formSubmitted to true after successful submission
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log("UpdateDataSentError--------->", requestData);
        console.error("Item not updated:", error);
        // Handle error
      });
    setUpdateMode(false); // Switch back to display mode after updating
  };

  useEffect(() => {
    if (formSubmitted) {
      console.log("--------------formSubmitted------------");
      window.location.reload();
      // navigate("/items");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <div className="item-details">
      <ResponsiveAppBar />
      <StyledContainer>
        {updateMode === false && (
          <div>
            <h1>Item Details</h1>
            <div className="itemBody">
              <StyledBanner>
                <div className="item-details-img">
                  <img src={imgSRC}></img>
                </div>
              </StyledBanner>

              <StyledBanner>
                <div className="item-details-content">
                  <div className="description">
                    <p>
                      Description:{" "}
                      {filteredList[0]?.description || "Not available"}
                    </p>
                  </div>
                </div>
              </StyledBanner>
              <StyledBanner>
                <div className="items-d">
                  <div className="item-d">
                    <p>
                      Name:{" "}
                      {filteredList[0]?.item_name || "Not available"}
                    </p>
                  </div>
                  <div className="item-d">
                    <p>Season: {filteredList[0]?.season || "Not available"}</p>
                  </div>
                  <div className="item-d">
                    <p>
                      Category: {filteredList[0]?.category || "Not available"}
                    </p>
                  </div>
                  <div className="item-d">
                    <p>
                      BrandName:{" "}
                      {filteredList[0]?.brand_name || "Not available"}
                    </p>
                  </div>
                  <div className="item-d">
                    <p>Colour: {filteredList[0]?.color || "Not available"}</p>
                  </div>
                  <div className="item-d">
                    <p>Size: {filteredList[0]?.size || "Not available"}</p>
                  </div>
                  <div className="item-d">
                    <p>
                      Last worn Date:{" "}
                      {filteredList[0]?.last_worn_date || "Not available"}
                    </p>
                  </div>
                  <div className="item-d">
                    <p>
                      Purchase Date:{" "}
                      {filteredList[0]?.purchase_date || "Not available"}
                    </p>
                  </div>
                  <div className="item-d">
                    <p>
                      Use count: {filteredList[0]?.use_count || "Not available"}
                    </p>
                  </div>
                </div>
              </StyledBanner>
            </div>
            <div className="item-btns">
              <Button 
                type="button"
                variant="contained"
                color="primary"
                onClick={handleUpdateButtonClick}
                style={{ marginRight: "10px", backgroundColor: "#ADC4CE" }}
              >
                Update Item
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => navigate("/items")}
                style={{ backgroundColor: "black" }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
        {updateMode === true && (
          <form onSubmit={handleSubmit}>
            <h1>Edit Item</h1>
            <div className="itemBody">
              <StyledBanner>
                <div className="item-details-img">
                  <img src={imgSRC}></img>
                </div>
              </StyledBanner>

              <StyledBanner>
                <div className="item-details-content">
                  <div className="description">
                    <label>Description:</label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={filteredList[0].description}
                    />
                  </div>
                </div>
              </StyledBanner>

              <StyledBanner>
                <div className="items-d">
                  <div className="item-d">
                    <label>Closet Name:</label>
                    <input
                      type="text"
                      name="closet_name"
                      defaultValue={filteredList[0].closet_id}
                      disabled
                    />
                  </div>
                  <div className="item-d">
                    <label>Season:</label>
                    <input
                      type="text"
                      name="season"
                      defaultValue={filteredList[0].season}
                    />
                  </div>
                  <div className="item-d">
                    <label>Category:</label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={filteredList[0].category}
                    />
                  </div>
                  <div className="item-d">
                    <label>Brand Name:</label>
                    <input
                      type="text"
                      name="brand_name"
                      defaultValue={filteredList[0].brand_name}
                    />
                  </div>
                  <div className="item-d">
                    <label>Color:</label>
                    <input
                      type="text"
                      name="color"
                      defaultValue={filteredList[0].color}
                    />
                  </div>
                  <div className="item-d">
                    <label>Size:</label>
                    <input
                      type="text"
                      name="size"
                      defaultValue={filteredList[0].size}
                    />
                  </div>
                  <div className="item-d">
                    <label>Last Worn Date:</label>
                    <input
                      type="text"
                      name="last_worn_date"
                      defaultValue={filteredList[0].last_worn_date}
                    />
                  </div>
                  <div className="item-d">
                    <label>Purchase Date:</label>
                    <input
                      type="text"
                      name="purchase_date"
                      defaultValue={filteredList[0].purchase_date}
                    />
                  </div>
                  <div className="item-d">
                    <label>Use Count:</label>
                    <input
                      type="text"
                      name="use_count"
                      defaultValue={filteredList[0].use_count}
                      disabled
                    />
                  </div>
                </div>
              </StyledBanner>
            </div>
            <div className="item-btns">
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default ItemDetails;
