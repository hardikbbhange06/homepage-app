import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Feedbackk() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
          height: "500px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1"  color={"red"} variant="1">
        Have Feedback?
        </Typography>
        <Typography  variant="1">
        Help us to improve by providing your feedbacks!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
            label="Enter your email"
            autoFocus
          />
         <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          
          variant="filled"
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
  );
}






// 
// export default Feedbackk;