import React from "react";
import { Typography, Grid, Divider } from "@mui/material";

const Footer = () => (
  <>
    <Divider sx={{ mt: 5, mb: 1 }}></Divider>
    <Grid
      container
      spacing={2}
      columns={16}
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Grid item xs={8}>
        <Typography variant="body3">Built by m.currier designs</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body3R" component="div">
          ©DF Construction Services 2024
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default Footer;
