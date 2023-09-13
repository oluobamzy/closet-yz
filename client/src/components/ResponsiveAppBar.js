import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from '@mui/material/Icon';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./usersContext";
import ThermostatIcon from '@mui/icons-material/Thermostat';

const pages = ["Add Closet", "Add Item", "My Items", "Dashboard", "Outfit", "Login", "Logout", "Register", "Bin"]

const settings = [
  "Add Closet",
  "Add Item",
  "My Items",
  "Dashboard",
  "Outfit",
  "Login",
  "Logout",
  "Register",
  "Bin",
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [weatherToday, setWeatherToday] = React.useState(null);
  const [displayWeather, setDisplayWeather] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = () => {
    window.location.href = "/login";
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handleOutfit = () => {
    window.location.href = "/today";
  };
  const handleCloset = () => {
    window.location.href = "/closet";
  };
  const handleBin = () => {
    window.location.href = "/bin";
  };
  const handleAddItem = () => {
    window.location.href = "/additem";
  };
  const handleItems = () => {
    window.location.href = "/items";
  };
  const handleRegister = () => {
    window.location.href = "/register";
  };
  const handleLogout = () => {
    fetch("http://localhost:8080/auth/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the login page on successful logout
          window.location.href = "/login"; // Replace with your login page URL
        } else {
          // Handle logout error or other cases here
          console.error("Logout error:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const weatherDisplay = async () => {
    try {
      const response = await fetch("http://localhost:8080/weather", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherToday(data);

      // Ensure that the temperature data is valid before calculating displayWeather
      if (data?.main?.temp !== null) {
        const tempInCelsius = data.main.temp - 273.15;
        setDisplayWeather(tempInCelsius);
      } else {
        console.error("Temperature data is missing or invalid.");
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await weatherDisplay();
    };

    fetchData();
  }, []);
  // useEffect(() => {

  // }  , [displayWeather]);


  // Check if displayWeather is NaN before rendering
  const isDisplayWeatherValid = displayWeather !== null && displayWeather !== undefined;

  //const weather = weatherDisplay();
  
  // const Container = styled(Box)(({ theme }) => ({
  //   position: 'fixed',
  //   top: 0,
  //   bottom: 100,
  //   left: 0,
  //   right: 0,
  //   zIndex: 1000,
  // }));
  // const user = useUser();
  // console.log("user", user);
  return (
    <AppBar position="static" sx={{ width: "100" }}>
      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#96B6C5", padding: 0 }}
      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#EEE0C9",
              textDecoration: "none",
            }}
          >
            Closet-YZ
          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <ThermostatIcon/>
            {isDisplayWeatherValid? displayWeather.toFixed(2) + "°C" : "Loading..."}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            closet-yz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) =>
              page === "Add Closet" ? (
                <Button
                  key={page}
                  onClick={handleCloset}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Add Item" ? (
                <Button
                  key={page}
                  onClick={handleAddItem}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "My Items" ? (
                <Button
                  key={page}
                  onClick={handleItems}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Dashboard" ? (
                <Button
                  key={page}
                  onClick={handleDashboard}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Outfit" ? (
                <Button
                  key={page}
                  onClick={handleOutfit}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Login" ? (
                <Button
                  key={page}
                  onClick={handleClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ): page === "Logout" ? (
                <Button
                  key={page}
                  onClick={handleLogout}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Register" ? (
                <Button
                  key={page}
                  onClick={handleRegister}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : page === "Bin" ? (
                <Button
                  key={page}
                  onClick={handleBin}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ) : null
            )} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) =>
                setting === "Add Closet" ? (
                  <MenuItem key={setting} onClick={handleCloset}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "Dashboard" ? (
                  <MenuItem key={setting} onClick={handleDashboard}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "Logout" ? (
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "Add Item" ? (
                  <MenuItem key={setting} onClick={handleAddItem}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "Bin" ? (
                  <MenuItem key={setting} onClick={handleBin}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "My Items" ? (
                  <MenuItem key={setting} onClick={handleItems}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : setting === "Register" ? (
                  <MenuItem key={setting} onClick={handleRegister}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ): setting === "Outfit" ? (
                  <MenuItem key={setting} onClick={handleOutfit}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : null
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
