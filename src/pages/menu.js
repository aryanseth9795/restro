import React from "react";
import p2 from "../asset/img/2.jpg";
import p3 from "../asset/img/3.jpg";
import p4 from "../asset/img/4.jpg";
import p5 from "../asset/img/5.jpg";
import p6 from "../asset/img/6.jpg";
import p7 from "../asset/img/7.jpg";
import piz from "../asset/img/piz.webp";
import fru from "../asset/img/Fruit.jpg";
import chik from "../asset/img/chik.webp";
import Typed from 'react-typed'
import "../styles/menu.css";
export default function menu() {
  return (
    <div>
      <section id="food">
        <h2 id="head">
          <Typed
            strings={["Types of food "]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h2>
        <div class="food-container container">
          <div class="food-type fruits">
            <div class="img-container">
              <img src={fru} alt="" />
              <div class="img-content">
                <h3>Fruits</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Fruit"
                  class="btn btn-primary"
                  target="_blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div class="food-type vegetables">
            <div class="img-container">
              <img src={piz} alt="" />
              <div class="img-content">
                <h3>Fast Food</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Vegetable"
                  class="btn btn-primary"
                  target="_blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div class="food-type grains">
            <div class="img-container">
              <img src={chik} alt="" />
              <div class="img-content">
                <h3>Chicken</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Grain"
                  class="btn btn-primary"
                  target="_blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="food-menu">
        <h2 class="food-menu-heading">Food Menu</h2>
        <div class="food-menu-container container">
          <div class="food-menu-item food-menu-item1">
            <div class="food-image">
              <img src={p2} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 250</p>
            </div>
          </div>
          <div class="food-menu-item food-menu-item2">
            <div class="food-image">
              <img src={p3} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 260</p>
            </div>
          </div>
          <div class="food-menu-item food-menu-item3">
            <div class="food-image">
              <img src={p4} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 270</p>
            </div>
          </div>
          <div class="food-menu-item food-menu-item4">
            <div class="food-image">
              <img src={p5} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 150</p>
            </div>
          </div>
          <div class="food-menu-item food-menu-item5">
            <div class="food-image">
              <img src={p6} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 270</p>
            </div>
          </div>
          <div class="food-menu-item food-menu-item6">
            <div class="food-image">
              <img src={p7} alt="" />
            </div>
            <div class="food-description">
              <h2 class="food-title">Food Menu Item 6</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                officiis.
              </p>
              <p class="food-price">Price : &#8377; 230</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
