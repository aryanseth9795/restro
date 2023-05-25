import React from "react";
import "../styles/testo.css";
import Typed from "react-typed";
import av1 from "../asset/img/av1.jpeg";
import av2 from "../asset/img/av2.png";
import av3 from "../asset/img/av3.jpeg";
export default function Testo() {
  return (
    <div>
      <section id="testimonials">
        <h2 class="testimonial-title">
          {" "}
          <Typed
            strings={["What Our Customers Say "]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h2>
        <div class="testimonial-container container">
          <div class="testimonial-box">
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              est corporis, nemo placeat nesciunt amet!
            </p>
            <div class="customer-detail">
              <div class="customer-photo">
                <img src={av1} alt="" />
              </div>
              <p>John Doe</p>
            </div>
          </div>

          <div class="testimonial-box">
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              est corporis, nemo placeat nesciunt amet!
            </p>
            <div class="customer-detail">
              <div class="customer-photo">
                <img src={av2} alt="" />
              </div>
              <p>Jay Doe</p>
            </div>
          </div>

          <div class="testimonial-box">
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              est corporis, nemo placeat nesciunt amet!
            </p>
            <div class="customer-detail">
              <div class="customer-photo">
                <img src={av3} alt="" />
              </div>
              <p>Jolly Doe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
