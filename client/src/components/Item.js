import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="ItemContainer">
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
    </div>
  );
}

export default Item;
