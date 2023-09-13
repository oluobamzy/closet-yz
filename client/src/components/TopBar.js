import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './TopBar.css';

const routeTextMappings = {
  '/closet': 'Closet',
  '/items': 'Closet Items',
  '/today': "Today's Outfit",
  '/bin': 'Bin',
  '/dashboard': 'Dashboard',
  '/addItem': 'Add Item',
};

const TopBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {Object.keys(routeTextMappings).map((path) => (
          <Link to={path} key={path}>
            <Button className="topbar-btn">
              {currentPath === path ? 'Logout' : routeTextMappings[path]}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
