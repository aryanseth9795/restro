import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <h2> All Rights Reserved To &copy; Chilly Restaurant @ JAUNPUR</h2>
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
    </div>
  );
}
