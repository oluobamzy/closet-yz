
const Item = (props) => {
  
  return (
    <div className="ItemContainer">
      <div className="Item">
        <img src={props.imageUrl} alt="Item Image" />
      </div>
    </div>
  );
}

export default Item;