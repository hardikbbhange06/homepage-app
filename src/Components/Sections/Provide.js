import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Provide.css";
import Imagee from "./icon2.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Provide() {
  return (
    <div>
      <h1 className="su">Surgeries we Provide </h1>
      <div className="card1">
        <div>
          <Card
            sx={{
              maxWidth: 200,
              borderRadius: "none",
              "&:hover": {
                backgroundColor: "#f9e6d3",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="./icon2.png"
                img   src={Imagee} 
                // alt="green iguana"
              />
              <CardContent>
                 <div  className="ca"> 
                <Typography   gutterBottom variant="h5" component="div">
                 Fissure 
                </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                An anal fissure is a small tear in the thin, moist tissue (mucosa) that lines the anus.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div><Card
            sx={{
              maxWidth: 200,
              borderRadius: "none",
              "&:hover": {
                backgroundColor: "#f9e6d3",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="./icon2.png"
                img   src={Imagee} 
                // alt="green iguana"
              />
              <CardContent>
                 <div  className="ca"> 
                <Typography   gutterBottom variant="h5" component="div">
                 Hernia 
                </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                A hernia occurs when an internal organ or other body part protrudes through the wall of muscle or tissue that normally contains it.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
        <div>
        <Card
            sx={{
              maxWidth: 200,
              borderRadius: "none",
              "&:hover": {
                backgroundColor: "#f9e6d3",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="./icon2.png"
                img   src={Imagee} 
                // alt="green iguana"
              />
              <CardContent>
                 <div  className="ca"> 
                <Typography   gutterBottom variant="h5" component="div">
                Piles 
                </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                Piles is common in the case of both men and women. If global medical reports are to be believed, one out of every four adults suffers from piles or hemorrhoids at some or other point in their life.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
        <Card
            sx={{
              maxWidth: 200,
              borderRadius: "none",
              "&:hover": {
                backgroundColor: "#f9e6d3",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="./icon2.png"
                img   src={Imagee} 
                // alt="green iguana"
              />
              <CardContent>
                 <div  className="ca"> 
                <Typography   gutterBottom variant="h5" component="div">
                Fissure 
                </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                An anal fissure is a small tear in the thin, moist tissue (mucosa) that lines the anus.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
        <Card
            sx={{
              maxWidth: 200,
              borderRadius: "none",
              "&:hover": {
                backgroundColor: "#f9e6d3",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="./icon2.png"
                img   src={Imagee} 
                // alt="green iguana"
              />
              <CardContent>
                 <div  className="ca"> 
                <Typography   gutterBottom variant="h5" component="div">
                Fissure
                </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                An anal fissure is a small tear in the thin, moist tissue (mucosa) that lines the anus.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        
      </div>
      <div className="vi">
      <Stack spacing={2} direction="row">
      <Button variant="outlined" >View all </Button>
      </Stack>
      </div>
    </div>
  );
}
