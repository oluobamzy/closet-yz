import React from "react";
import Item from "./Item";
import "./ListItem.css"; // Import your CSS file for ListItem component
import TopBar from "./TopBar";

const ListItem = (props) => {
  const image = props.imageList.map((image) => {
    return <Item key={image.id} imageUrl={image.url} />;
  });

  return (
    <div className="list">
      <TopBar />
      <div className="list-item">{image}</div>
      <div className="btn-closet">
        <button>Add to Closet</button>
      </div>
    </div>
  );
};

export default ListItem;
