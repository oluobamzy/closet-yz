import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'; // Import your Login component
import './App.css';
import './components/Item.css';
import Register from './components/Register';
import ListItem from './components/ListItem';
import ItemDetails from './components/ItemDetails';
import './components/ListItem.css'
import AddItem from './components/AddItem';
import Dashboard from './components/Dashboard';
import Closet from './components/Closet';
import Bin from './components/Bin';
import { ItemsProvider } from './components/ItemsContext';
import OutfitToday from './components/OutfitToday';
import { OutfitProvider } from './components/outfitContext.js';
import { RecycleProvider } from './components/RecycleContext';

function App() {
  const navigateToLogin = () => {
    // Navigate to the '/login' route when the button is clicked
    window.location.href = '/login';
  };
  const navigateToRegister = () => {
    // Navigate to the '/login' route when the button is clicked
    window.location.href = '/register';
  };
  const navigateToItems = () => {
    // Navigate to the '/login' route when the button is clicked
    window.location.href = '/items';
  }

   
  return (
    <ItemsProvider>
       <OutfitProvider>
        <RecycleProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login  navigateToRegister={navigateToRegister} navigateToItems = {navigateToItems}/>} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/"
            element={<Home navigateToLogin={navigateToLogin} />} // Pass the callback function
          />
          <Route path="/items" element={<ListItem />} />
          <Route path="/details/:itemId" element={<ItemDetails />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/today" element={<OutfitToday/>} />
        </Routes>
      </div>
    </Router>
    </RecycleProvider>
    </OutfitProvider>
    </ItemsProvider>
  );
}

export default App;
