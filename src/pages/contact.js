import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/base/Button";
import "../styles/Contacts.css";
import p from "../asset/img/8.jpg";
export default function contact() {
  return (
    <div>
      <div id="contact">
        <div class="contact-container container">
          <div class="contact-image">
            <img src={p} alt="" />
          </div>
          <div class="form-container">
            <h2>Contact Us</h2>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="E-Mail" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type Your Message Here"
            ></textarea>
            <Link to="/">
              {" "}
              <Button className="btn"> Submit !</Button>
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  );
}
