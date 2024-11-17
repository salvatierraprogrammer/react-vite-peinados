import React, { useState } from "react";
import { Box, Button, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Icono de hamburguesa
import icon from "../assets/logo.jpeg"; // Asegúrate de que la ruta de la imagen es correcta

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        backgroundColor: "#8C52FE", // Fondo del Drawer
        color: "#fff",
        height: "100%", // Asegura que ocupe todo el alto del Drawer
      }}
    >
      <Button color="inherit" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Servicios
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF69B4",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#FF1493" },
        }}
      >
        Reserva tu cita
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        backgroundColor: "#8C52FE", // Fondo principal del header
        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={icon}
          alt="Bella Luz Logo"
          style={{
            width: "100px",
            height: "100px",
            marginRight: "10px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          Bella Luz
        </Typography>
      </Box>

      {/* Botón de menú hamburguesa en pantallas pequeñas */}
      <IconButton
        sx={{
          display: { xs: "block", md: "none" }, // Mostrar solo en pantallas pequeñas
          color: "#fff",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Menú en pantallas pequeñas (Drawer) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>

      {/* Botones visibles en pantallas grandes */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
          color="inherit"
          sx={{ color: "#fff", marginRight: "10px", fontWeight: "bold" }}
        >
          Servicios
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#FF1493" },
          }}
        >
          Reserva tu cita
        </Button>
      </Box>
    </Box>
  );
};

export default Header;  