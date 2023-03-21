import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Proyect } from "../../data/data";

interface Props {
  proyect: Proyect;
}

const Card = ({ proyect }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      border={2}
      borderRadius="30%"
      margin={1}
      p={3}
      boxShadow={5}
      bgcolor="lightgrey"
    >
      <Typography variant="h5">{proyect.name}</Typography>
    </Box>
  );
};

export default Card;
