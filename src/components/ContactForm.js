import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://react-spa-ashy.vercel.app/sendEmail.php", formData, {
        headers: {
          "Content-Type": "application/json", // Ensure the content type is JSON
        },
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Failed to send message.");
        }
      });
  };

  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
        </Grid>
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          variant="filled"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
