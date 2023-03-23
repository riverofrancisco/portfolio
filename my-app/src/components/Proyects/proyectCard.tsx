import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Proyect } from "../../data/data";

interface Props {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: Props) => {
  return (
    <Box
      display="flex"
      width="30%"
      flexDirection="column"
      alignItems="center"
      borderRadius={2}
      margin={1}
      p={3}
      boxShadow={2}
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h4">{proyect.name}</Typography>
      <Typography variant="overline">{proyect.period}</Typography>
      <img src={proyect.image} alt={proyect.name} />
      <Typography variant="body1">{proyect.description}</Typography>
    </Box>
  );
};

export default ProyectCard;
