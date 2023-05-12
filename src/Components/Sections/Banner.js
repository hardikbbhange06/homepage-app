import React from "react";
import "./Banner.css";
// import headerImage from "./shape1..png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function Banner() {
  return (
    <div className="banner2">
    <div className="banner">
      <div className="row align-items-center">
        <div className="Book">
          <div className="bo12">
            <h2>
              Book <span className="red">Free Appointments</span> With Our{" "}
            </h2>

            <h2>Expert Doctors!</h2>
          </div>
          <br />
          <h5>Get full medical assistance and consultation for diseases</h5>
          <h5 className="H">
            {" "}
            Hassle-free experience throughout your treatment.
          </h5>
          <br />
          <br />
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              color="warning"
              variant="contained"
              aria-label="outlined primary button group"
            >
              Book Appointments{" "}
            </Button>
            <hr className="hr" />

            <Button>Call our Agent </Button>
          </ButtonGroup>
            
        </div>
        {/* <div className="imgg">
          <img src={headerImage} />
        </div> */}
      
      </div>
      
    </div>
    </div>
  );
}

export default Banner;
