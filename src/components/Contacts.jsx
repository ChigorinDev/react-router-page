import React from "react";

const Contacts = (props) => {
  //it gets props from the router by default
  // console.log(props);

  //this function redirects user 
  // setTimeout(() => { 
  //   props.history.push('/about');
  // }, 2000)

  return (
    <div className="container">
      <h4 className="center"> Contacts </h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        consequatur et, illum fugiat aperiam esse nulla saepe dolor officia
        aspernatur veniam sed laudantium est a earum soluta magnam odio
        perferendis.
      </p>
    </div>
  );
};

export default Contacts ;
