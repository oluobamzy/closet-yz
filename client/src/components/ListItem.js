import React from "react";
import Item from "./Item";
import "./ListItem.css"; // Import your CSS file for ListItem component
import TopBar from "./TopBar";
import { Link } from "react-router-dom";

const ListItem = () => {

  const imageUrlList = [
    {
      id: 1,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
    {
      id: 4,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
    {
      id: 5,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
    {
      id: 6,
      url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
    },
  ];
  const image = imageUrlList.map((image) => {
    return <Item key={image.id} imageUrl={image.url} itemId={image.id} />;
  });

  return (
    <div className="list">
      <TopBar />
      <div className="list-item">{image}</div>
      <div className="btn-closet">
       <Link to={'/addItem'}><button >Add to Closet</button></Link> 
      </div>
    </div>
  );
};

export default ListItem;
