import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ADC4CE",
<<<<<<< HEAD
  padding: theme.spacing(2),
=======
  padding: theme.spacing(2), // Adjust the padding here for the footer container
>>>>>>> 5cd85a2a3c7f397d479af41aa9795922b8301492
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

const Section = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1), // Adjust the spacing between sections here
  padding: theme.spacing(1), // Adjust the padding within sections here
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2), // You can adjust this for larger screens
  },
}));

const sectionTypographyStyles = {
<<<<<<< HEAD
  fontFamily: "YourFontName, sans-serif", // Replace 'YourFontName' with the desired font name
  fontWeight: "bold", // You can adjust the font weight
  fontSize: "1.2rem", // You can adjust the font size
=======
  fontFamily: 'YourFontName, sans-serif', // Replace 'YourFontName' with the desired font name
  fontWeight: 'bold', // You can adjust the font weight
  fontSize: '1.2rem', // You can adjust the font size
>>>>>>> 5cd85a2a3c7f397d479af41aa9795922b8301492
};

const SocialLinks = styled("div")({
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
});

const SocialIcon = styled("span")({
  marginRight: "16px",
  fontSize: "24px",
});

const Footer = () => {
  return (
    <FooterContainer container>
      <Section item xs={12} md={3}>
<<<<<<< HEAD
        <Typography
          variant="h6"
          className="footer-section-title"
          style={sectionTypographyStyles}
        >
          About Us
        </Typography>
        <Typography variant="body2">
          Welcome to our wardrobe helper, Closet-YZ! We understand that choosing
          the perfect outfit can be a daily challenge. Our mission is to give
          you a overview of your closet, and simplify your wardrobe manager.
        </Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography
          variant="h6"
          className="footer-section-title"
          style={sectionTypographyStyles}
        >
          Meet the Team
        </Typography>
        <Typography variant="body2">- Olu</Typography>
        <Typography variant="body2">- Ben</Typography>
        <Typography variant="body2">- Khalid</Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography
          variant="h6"
          className="footer-section-title"
          style={sectionTypographyStyles}
        >
          Contact Us
        </Typography>
        <Typography variant="body2">
          Email:{" "}
          <Link href="mailto:closet-yz@gmail.com">closet-yz@gmail.com</Link>
        </Typography>
        <Typography variant="body2">City: Toronto, Ontario, Canada</Typography>
        <Typography variant="body2">Office: Your Office Address</Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography
          variant="h6"
          className="footer-section-title"
          style={sectionTypographyStyles}
        >
=======
        <Typography variant="h6" className="footer-section-title" style={sectionTypographyStyles}>
          About Us
        </Typography>
        <Typography variant="body2">
          Welcome to our wardrobe helper, Closet-YZ! We understand that choosing the perfect outfit
          can be a daily challenge. Our mission is to give you a overview of your closet, and simplify your wardrobe manager. 
        </Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography variant="h6" className="footer-section-title" style={sectionTypographyStyles}>
          Meet the Team
        </Typography>
        <Typography variant="body2">
          - Olu 
        </Typography>
        <Typography variant="body2">
          - Ben
        </Typography>
        <Typography variant="body2">
          - Khalid
        </Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography variant="h6" className="footer-section-title" style={sectionTypographyStyles}>
          Contact Us
        </Typography>
        <Typography variant="body2">
          Email: <Link href="mailto:closet-yz@gmail.com">closet-yz@gmail.com</Link>
        </Typography>
        <Typography variant="body2">
          City: Toronto, Ontario, Canada
        </Typography>
        <Typography variant="body2">
          Office: Your Office Address
        </Typography>
      </Section>
      <Section item xs={12} md={3}>
        <Typography variant="h6" className="footer-section-title" style={sectionTypographyStyles}>
>>>>>>> 5cd85a2a3c7f397d479af41aa9795922b8301492
          Socials
        </Typography>
        <SocialLinks>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
        </SocialLinks>
      </Section>
      <Section item xs={12}>
<<<<<<< HEAD
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "16px" }}
        >
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-service">Terms of Service</Link> | © 2023
          Closet-YZ. All Rights Reserved.
=======
        <Typography variant="body2" align="center" style={{ marginTop: "16px" }}>
          <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link> | © 2023 Closet-YZ. All Rights Reserved.
>>>>>>> 5cd85a2a3c7f397d479af41aa9795922b8301492
        </Typography>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
