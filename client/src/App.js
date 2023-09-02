
import "./App.css";
import "./components/Item.css";
import Home from "./components/Home";
import ListItem from "./components/ListItem";

function App() {
  const imageUrlList = [
    { id: 1, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
    { id: 2, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
    { id: 3, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
    { id: 4, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
    { id: 5, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
    { id: 6, url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" },
  ];

  // const imageList = imageUrlList.map((image)=>{
  //   return <ListItem key = {image.id} imageUrl={image.url} />
  // })
  return (
    <div className="App">
      {/* <Home /> */}
      <div className="list-container">
      <ListItem imageList = {imageUrlList}/>
      </div>
      
    </div>
  );
}

export default App;
