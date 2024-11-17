import React from "react";
import { Box, Button, Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import icon from "../assets/logo.jpeg";
import peinadosImg from "../assets/peinados.jpeg";

// Asegúrate de que estas imágenes estén disponibles en la carpeta adecuada
const biotinaImg = "https://elbazarnatural.com/blog/wp-content/uploads/2023/01/Cual-es-la-mejor-biotina-para-el-pelo.jpg";
const oroImg = "https://www.checkealo.pe/files/productos/6132/0bd82d91fd4103419f4da16d6c9bf430.jpg";
const plastificadoImg = "https://pbs.twimg.com/media/DngqNg1WwAIAXB1.jpg";
const botoxImg = "https://mcmmedicinaestetica.com/wp-content/uploads/2024/04/botox.jpg";
const keratinaImg = "https://dcdn.mitiendanube.com/stores/993/128/products/fb_img_16359474375411-ad4d5701e78f02e61316363920362664-1024-1024.jpg";


const Home = () => {
  const servicios = [
    { nombre: "Tratamiento de Biotina", descripcion: "Repara y fortalece tu cabello.", imagen: biotinaImg },
    { nombre: "Alisado con oro", descripcion: "Cabello liso y radiante.", imagen: oroImg },
    { nombre: "Alisado plastificado", descripcion: "Brillo y suavidad incomparables.", imagen: plastificadoImg },
    { nombre: "Botox", descripcion: "Restaura tu cabello dañado.", imagen: botoxImg },
    { nombre: "Shok de Keratina 🤩", descripcion: "Revive tu cabello con keratina.", imagen: keratinaImg },
    { nombre: "Peinados 💣", descripcion: "Lucí increíble para cualquier evento.", imagen: peinadosImg },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F8F4FF",
        color: "#4B0082",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: "#8C52FE",
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
        <Box>
          <Button color="inherit" sx={{ color: "#fff", marginRight: "10px", fontWeight: "bold" }}>
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

      {/* Hero Section */}
      <Container
        sx={{
          textAlign: "center",
          py: 5,
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#8C52FE",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#fff", mb: 2, fontSize: { xs: "2em", md: "3em" } }}
        >
          Calidad y Belleza para vos 🎀
        </Typography>
        <Typography sx={{ mb: 4, fontSize: "1.2em", maxWidth: "600px", color: "#fff" }}>
          Descubrí los mejores tratamientos para tu cabello. Sentite renovada y hermosa con nuestros servicios.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            padding: "0.8em 1.5em",
            fontSize: "1.2em",
            borderRadius: "30px",
            fontWeight: "bold",
            transition: "all 0.3s ease-in-out",
            "&:hover": { backgroundColor: "#FF1493", transform: "scale(1.05)" },
          }}
        >
          Conocé más
        </Button>
      </Container>

      {/* Servicios */}
      <Container sx={{ py: 5, backgroundColor: "#8C52FE" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold", fontSize: "2em", color: "#fff" }}
        >
          Nuestros Servicios
        </Typography>
        <Grid container spacing={3}>
          {servicios.map((servicio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  color: "#4B0082",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={servicio.imagen}
                  alt={servicio.nombre}
                  sx={{ height: 140, borderRadius: "10px 10px 0 0" }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {servicio.nombre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4B0082" }}>
                    {servicio.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
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
    </Box>
  );
};

export default Home;