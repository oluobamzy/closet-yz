import Item from "./Item";
import CabinIcon from '@mui/icons-material/Cabin';
import "./Bin.css";

const Bin = () => {
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
    }
   
  ];
  const image = imageUrlList.map((image) => {
    return <Item key={image.id} imageUrl={image.url} itemId={image.id} />;
  });
  return (
    <div className="bin list">
      <div className="header">
        <CabinIcon className="cabinIcon"/>
        <h1>Bin</h1>
      </div>
      <div className="list-item">
      {image}
      </div>
      
    </div>
  )
}
export default Bin;