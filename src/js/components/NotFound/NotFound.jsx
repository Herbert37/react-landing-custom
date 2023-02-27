import React, { Suspense } from "react";
//Components
import SmallLoader from "../SmallLoader/SmallLoader";
//Styles
import "./NotFound.scss";

function NotFound() {
  return (
    <Suspense fallback={<SmallLoader />}>
      <div class="wrapper">
        <div class="stars">
          <div class="central-body">
            <img
              class="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
            />
            <a href="#" class="btn-go-home" target="_blank">
              GO BACK HOME
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket1"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="20px"
            />
            <img
              class="object_rocket2"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default NotFound;