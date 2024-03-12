import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { bundleMain } from "../../../assets/img/bundles/bundleMain";
import { GoArrowLeft } from "react-icons/go";
import News from "./News";
import Form from "./Form";
import List from "./List";
import "./main.scss";

function Main() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (rotate < 2) return setRotate(rotate + 1);
      else return setRotate(0);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [rotate]);

  return (
    <div className="main">
      <div className="main_1">
        <News value="Expressions of Identity: Portraits of the Soul Today at 9pm" />
        <Form />
      </div>
      <div className="main_2">
        <h1>creative</h1>
        <div className="main_2_img">
          <img src={bundleMain[rotate]} />
        </div>
        <div>
          <h1>arts</h1>
          <h1>display</h1>
        </div>
      </div>
      <div className="main_3">
        <p>
          Welcome to our art gallery, where creativity meets beauty. Explore our
          extensive collection of inspiring artworks, from paintings to
          sculptures, photography to digital art. Each piece presents a story,
          an emotion, and a unique vision. Join us to delve into a captivating
          world of art and discover boundless inspiration.
        </p>
        <div>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Main;
