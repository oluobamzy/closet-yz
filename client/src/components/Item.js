import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = (props) => {
  const handleAddDelete = () => {
    const itemId = props.itemId;
    console.log("props.itemId------", props.itemId);

    // Send a request to the server to delete the item using props.itemId
    // You can use the fetch API or Axios for this

    fetch(`http://localhost:8080/api/items/bin`, {
      method: "POST", // Use the appropriate HTTP method for deletion
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemId),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Item set to delete successfully:", data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
        // Handle error
      });
  };

  return (
    <div className="ItemContainer" style={{ position: "relative" }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
      <div
        className="favoriteItem"
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        <Link to={"/addItem"}>
          <Button style={{ backgroundColor: "#96B6C5" }}>Add to Outfit</Button>
        </Link>
        <Button
          onClick={handleAddDelete}
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Item;
