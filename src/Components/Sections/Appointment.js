import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Appointment.css"

const theme = createTheme();

export default function Appointment() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="tt11">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          m: 5,
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
          height: "520px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       <div  className="ooo">
        <Typography component="h1"  color={"red"} variant="1">
        Let s Schedule Your Appointment
        </Typography>
        <Typography  variant="1">
        We would love to hear from you!
        </Typography>
        </div>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Full name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Phone Number"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="city"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="treatment"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
    </div>
  );
}

//
// export default Appointment;
