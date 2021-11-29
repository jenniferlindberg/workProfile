import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "30vh",
    backgroundColor: "#fa1994",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography fontSize="fontSize.small">Jennifer Lindberg</Typography>
      <div className={classes.contactIcons}>
        <IconButton>
          <GitHubIcon />
          <LinkedInIcon />
          <MailOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
