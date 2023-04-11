import React from "react";
import ProyectCard from "./proyectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Proyect, Proyects } from "../../data/data";
import Typography from "@mui/material/Typography";

const ProyectsList = () => {
  return (
    <Grid
      container
      xs={12}
      style={{ height: "100%", width: "100vw" }}
      /*       borderTop={3}
      borderBottom={3} */
      id="Proyectos"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={10}
        py={2}
      >
        <Typography
          variant="h2"
          fontWeight="bolder"
          style={{
            textShadow:
              "2px 2px 0px rgba(255, 255, 255, 0.5), 4px 4px 2px rgba(0, 0, 0, 0.15)",
          }}
        >
          Proyects
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        py={4}
      >
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {Proyects.map((p: Proyect) => {
            return <ProyectCard key={p.name} proyect={p} />;
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProyectsList;
