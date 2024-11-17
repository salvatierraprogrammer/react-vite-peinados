import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3, backgroundColor: "#8C52FE", color: "#fff" }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Seguí nuestras redes:
      </Typography>
      <Button
        startIcon={<Instagram />}
        href="https://www.instagram.com/bella.luz10/"
        target="_blank"
        sx={{
          color: "#fff",
          fontSize: "1.2em",
          transition: "color 0.3s ease-in-out",
          "&:hover": { color: "#FF69B4" },
        }}
      >
        Instagram
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        © 2024 Bella Luz. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;