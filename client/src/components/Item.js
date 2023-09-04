import { Link } from 'react-router-dom';
const Item = (props) => {
  
  return (
    <div className="ItemContainer">
      <div className="Item">
        <Link to={`/details/${props.itemId}`}>
          <img src={props.imageUrl} alt="Item Image" />
        </Link>
      </div>
    </div>
  );
}

export default Item;