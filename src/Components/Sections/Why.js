import * as React from "react";
import Box from "@mui/material/Box";
import headerImage1 from "./Picture3.png";

export default function Why() {
  return (
    <div className="www111"  style={{  }}>
      <Box
        sx={{
          display: "flex",
         alignContent:"center",
          m: 2,
          width:1550,
          marginTop:8,
         marginBottom:10,
          p: 5,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "#f30808" : "#f30808",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          height: "500px",
        }}
      >
        {
          <div className="b1">
            <h1> Why BurlyCare ?</h1>
            <h2>1. Prior safe for COVID-19</h2>
            We are providing the service where our doctors and staff are all
            tested of COVID 19 and following the social distancing, our clinics
            are sanitized on daily basis, sterilized surgical equipment, and
            mandatory PPE kits during surgery.
            <br />
            <h2>2.Prime surgery experience</h2>A greedy medical coordinator
            helps you throughout the surgery outing from insurance paperwork, to
            free commute from home to hospital & back and admission-discharge
            process at the hospital with convenience.
            <br />
            <h2>3.Medical expertise with best technology</h2>
            Our surgeons spend a lot of time with you to diagnose your
            condition. You are assisted in all pre-surgery medical diagnostics.
            We offer advanced laser and laparoscopic surgical treatments.
            <br />
            <h2>4.After the surgery done</h2>
            We take care of regular follow-ups post-surgery to take care of your
            health our experts guide you about your diets and excercise.
          </div>
        }
        {
          <div  className="img3">
          <br />
          <br /><br /><br /><br /><br />
            <img  src={headerImage1} />{" "}
          </div>
        }
      </Box>
    </div>
  );
}
