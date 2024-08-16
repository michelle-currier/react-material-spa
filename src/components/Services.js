import * as React from "react";

import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
  Grid,
} from "@mui/material";
import image1 from "./../images/bulkhead.PNG";
import image2 from "./../images/bulkheadAfter.PNG";
import image3 from "./../images/demo2.jpg";
import image4 from "./../images/drainageDemo.jpg";
import image5 from "./../images/pilingsDrivin.jpg";
import image6 from "./../images/fence.jpg";

const services = [
  {
    name: "Demolition",
    desc: "Expertly dismantling structures to make way for new possibilities.",
    image: image1,
  },
  {
    name: "Excavation",
    desc: "Precise earth-moving to create the groundwork for your projects.",
    image: image2,
  },
  {
    name: "Land Clearing & Site Preperation",
    desc: "Comprehensive site preparation, including land clearing, to ensure your project starts on solid ground and meets all necessary requirements.",
    image: image3,
  },
  {
    name: "Bulkhead Construction",
    desc: "Building durable and reliable barriers to protect your property.",
    image: image4,
  },
  {
    name: "Drainage Implimentation",
    desc: "Implementing effective drainage solutions to prevent water damage.",
    image: image5,
  },
  {
    name: "Pile Driving",
    desc: "Delivering strong and stable foundations with precise pile driving techniques.",
    image: image6,
  },
];
export default function ActionAreaCard() {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Some of the services we offer include:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
