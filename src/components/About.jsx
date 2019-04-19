import React from "react";
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        consequatur et, illum fugiat aperiam esse nulla saepe dolor officia
        aspernatur veniam sed laudantium est a earum soluta magnam odio
        perferendis.
      </p>
    </div>
  );
};

export default Rainbow(About);
