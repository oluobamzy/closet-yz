import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { styled } from '@mui/system';

const FooterContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ADC4CE",
  padding: theme.spacing(4),
 // position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));



const Footer = () => {
 // const classes = useStyles();

  return (
    <FooterContainer container>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Footer Content</Typography>
        <Typography variant="body2" paragraph>
          This is your footer content. You can add links and information here.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} >
      <div>
            <Link href="#"  style={{textDecoration:"none"}}>
              About
            </Link>
          </div>
          <div>
            <Link href="#"  style={{textDecoration:"none"}}>
              Meet The Team
            </Link>
          </div>
          <div>
            <Link href="#"  style={{textDecoration:"none"}}>
              Contact Us
            </Link>
          </div>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
