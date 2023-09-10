import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Item = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="ItemContainer" style={{ position: 'relative' }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
      <div className="favoriteItem" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <Link to={'/addItem'}>
          <Button style={{ backgroundColor: "#96B6C5" }}>Add to Outfit</Button>
          <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
        </Link>
      </div>
    </div>
  );
}

export default Item;
