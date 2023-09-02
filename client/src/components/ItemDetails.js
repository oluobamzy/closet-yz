import "./ItemDetails.css";

const ItemDetails = () => {
  return (
    <div className="item-details">
      <h1>Item Details</h1>
      <div className="itemBody">
        <div className="item-details-img">
            <img src="https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1"></img>
        </div>
        <div className="item-details-content">
          <div className="description">
            <p>Description</p>
          </div>
          <div className="items-d">
            <div className="item-d">
              <p>Category</p>
            </div>
            <div className="item-d">
              <p>Colour</p>
            </div>
            <div className="item-d">
              <p>BrandName</p>
            </div>
            <div className="item-d">
              <p>Purchase Date</p>
            </div>
            <div className="item-d">
              <p>Last worn Date</p>
            </div>
            <div className="item-d">
              <p>Size</p>
            </div>
            <div className="item-d">
              <p>Use count</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="item-btns">
        <button className="btn btn-primary">Add to outfit</button>
        <button className="btn btn-danger">Sell / Donate</button>
      </div>

    </div>
  );
};
export default ItemDetails;