import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    testimonial: "This service is fantastic! Highly recommend to anyone.",
  },
  {
    name: "Jane Smith",
    role: "xyz Construction",
    testimonial: "Exceptional experience, the team was incredibly helpful.",
  },
  {
    name: "Sam Wilson",
    role: "Client",
    testimonial: "A+ service and support. I will definitely use it again.",
  },
];

const Testimonials = () => (
  <>
    <Typography variant="h4">Testimonials</Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
      {testimonials.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                {item.name} - <i>{item.role}</i>
              </Typography>
              <Typography variant="body2">{item.testimonial}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

export default Testimonials;
