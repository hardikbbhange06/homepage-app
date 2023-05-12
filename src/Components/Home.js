import React from "react";

import Headers from "./Heade/Headers";
import Navb from "./Navbar/Navb";
import Banner from "./Sections/Banner";
import Provide from "./Sections/Provide";
import Why from "./Sections/Why";
import Numbers from "./Sections/Numbers";
import Clients from "./Sections/Clients";
import Appointment from "./Sections/Appointment";
import Questions from "./Sections/Questions";
import Feedbackk from "./Sections/Feedbackk";
import Footer from "./Sections/Footer";

function Home() {
  return (
    <div>
      <div>
        <Headers />
      </div>
      <br />

      <div>
        <Navb />
      </div>
      <br />
      <br />
      <Banner />
      <Provide />
      <br />
      <br />
      <Why />
      <Numbers />
      <Clients />
      <Appointment />
      <Questions />
      <br /><br />
      <Feedbackk />
      <Footer />  
    </div>
  );
}

export default Home;
