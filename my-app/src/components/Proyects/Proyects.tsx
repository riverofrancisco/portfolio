import React from "react";
import ProyectCard from "./proyectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Proyect, Proyects } from "../../data/data";
import Typography from "@mui/material/Typography";

const ProyectsList = () => {
  return (
    <Grid container spacing={10} mt={2} borderTop={3} borderBottom={3}>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        border={1}
      >
        <Typography variant="h1">Proyects</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        border={1}
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
