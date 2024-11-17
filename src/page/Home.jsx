import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Importar imágenes (ejemplo)
import cubrimientoCanas1 from "../assets/Cubrimiento_de_canas_nutrición_1.jpeg";
import cubrimientoCanas2 from "../assets/Cubrimiento_de_canas_nutrición_2.jpeg";
import alisadoPlastificado from "../assets/Alisado_Plastificado.jpeg";
import nanoplastia1 from "../assets/Alisado_Nanoplastia_Bril_o_Extremo_1.jpeg";
import nanoplastia2 from "../assets/Alisado_Nanoplastia_Bril_o_Extremo_2.jpeg";
import tratamientoBiotina from "../assets/Tratamiento_de_Biotina.jpeg";
import peinadosImg from "../assets/peinados.jpeg";
import clienta from "../assets/clienta.png";

export const serviciosData = [
  {
    nombre: "Cubrimiento de canas + nutrición",
    descripcion: "Repara y fortalece tu cabello.",
    imagen: [cubrimientoCanas1, cubrimientoCanas2],
  },
  {
    nombre: "Alisado Plastificado",
    descripcion: "Cabello increíblemente suave y manejable.",
    imagen: [alisadoPlastificado],
  },
  {
    nombre: "Alisado Nanoplastia Brillo Extremo",
    descripcion: "Alisado profundo con un brillo impresionante.",
    imagen: [nanoplastia1, nanoplastia2],
  },
  {
    nombre: "Tratamiento de Biotina",
    descripcion: "Fortalece y nutre tu cabello desde la raíz.",
    imagen: [tratamientoBiotina],
  },
  {
    nombre: "Peinados 💣",
    descripcion: "Luce espectacular para cualquier ocasión especial.",
    imagen: [peinadosImg],
  },
];

const Home = () => {
  // Estado para el Modal
  const [open, setOpen] = useState(false);
  const [selectedServicio, setSelectedServicio] = useState(null);

  // Abrir modal y configurar servicio seleccionado
  const handleOpen = (servicio) => {
    setSelectedServicio(servicio);
    setOpen(true);
  };

  // Cerrar modal
  const handleClose = () => {
    setOpen(false);
    setSelectedServicio(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#8C52FE",
        color: "#4B0082",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
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
          backgroundImage: `url(${clienta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          borderRadius: "10px",
         
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 2,
            fontSize: { xs: "2em", md: "3em" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Calidad y Belleza para vos 🎀
        </Typography>
        <Typography
          sx={{
            mb: 4,
            fontSize: "1.2em",
            maxWidth: "600px",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
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
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            fontSize: "2em",
            color: "#fff",
          }}
        >
          Nuestros Servicios
        </Typography>
        <Grid container spacing={3}>
          {serviciosData.map((servicio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#FF69B4",
                  color: "#fff",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                  cursor: "pointer",
                }}
                onClick={() => handleOpen(servicio)}
              >
                <CardMedia
                  component="img"
                  image={Array.isArray(servicio.imagen) ? servicio.imagen[0] : servicio.imagen}
                  alt={servicio.nombre}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {servicio.nombre}
                  </Typography>
                  <Typography variant="body2">{servicio.descripcion}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      {selectedServicio && (
  <Dialog
    open={open}
    onClose={handleClose}
    fullWidth
    maxWidth="md"
    PaperProps={{
      sx: {
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#FFFAF0", // Color claro para el fondo del diálogo
        color: "#4B0082", // Color del texto
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      },
    }}
  >
    {/* Título del Diálogo */}
    <DialogTitle
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#8C52FE", // Fondo morado para el encabezado
        color: "#fff",
        padding: "16px 24px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {selectedServicio.nombre}
      </Typography>
      <IconButton
        onClick={handleClose}
        sx={{
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    {/* Contenido del Diálogo */}
    <DialogContent sx={{ padding: "24px",  backgroundColor: "#8C52FE" }}>
      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#fff",
          
        }}
      >
        {selectedServicio.descripcion}
      </Typography>

      {/* Galería de imágenes */}
<Box 
  sx={{ 
    backgroundColor: "#F8F4FF", // Fondo personalizado para toda la galería
    padding: "16px", 
    borderRadius: "10px" 
  }}
>
  <ImageList cols={2} gap={12}>
    {selectedServicio.imagen.map((img, idx) => (
      <ImageListItem key={idx} sx={{ backgroundColor: "#F8F4FF" }}>
        <img
          src={img}
          alt={`Imagen ${idx + 1} de ${selectedServicio.nombre}`}
          loading="lazy"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            objectFit: "cover",
          }}
        />
      </ImageListItem>
    ))}
  </ImageList>
</Box>

      {/* Botón de Llamada a la Acción */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF69B4",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "30px",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#FF1493",
              transform: "scale(1.05)",
            },
          }}
          onClick={() => {
            // Acción personalizada: redirigir, contactar, etc.
            console.log("Botón de acción presionado");
          }}
        >
          ¡Reserva tu cita ahora!
        </Button>
      </Box>
    </DialogContent>
  </Dialog>
)}
    </Box>
  );
};

export default Home;