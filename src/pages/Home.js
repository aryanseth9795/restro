import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from "@mui/base/Button";
import "../styles/Home.css";
import Typed from "react-typed";
import pic from "../asset/img/hom.jpg";
export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="showcase-container container">
          <section className="showcase-area" id="showcase">
            <h1 className="main-title" id="run">
              <Typed
                strings={[
                  "HUNGER !",
                  "UNEXPECTED GUEST !",
                  "Cooking Gone Wrong ! ",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <h3> MANY PROBLEMS ONE SOLUTION </h3>
            <h3> JUST CHILLY IT !  </h3>
            <div />
            <p>Eat Healty food, it is good for your health.</p>

            <Link to="/menu">
              {" "}
              <Button className="btn"> Order Now !</Button>
            </Link>
            <div>
              <h4>
                Follow Us!
              </h4><div id='lo'><InstagramIcon/>
                <FacebookIcon />
                <TwitterIcon/>
                <EmailIcon/></div>
              
            </div>
          </section>
        </div>
        <div className=" bgImage">
          <img src={pic} id="img1" />
        </div>
      </div>
      <div>
        <section id="about">
          <div classNameName="about-wrapper container">
            <div className="about-text">
              <p className="small">About Us</p>
              <h2>We've been Making Healthy Food for Last 10 Years </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus labore minus earum nobis blanditiis totam eveniet,
                nostrum corrupti consequuntur aut aspernatur laboriosam deserunt
                laborum libero officiis cumque quisquam omnis suscipit incidunt
                ipsa maxime porro provident eos maiores! Necessitatibus,
                quibusdam unde!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
