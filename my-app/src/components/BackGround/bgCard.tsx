import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Background } from "../../data/data";

interface Props {
  background: Background;
}

const BGCard = ({ background }: Props) => {
  return (
    <Box
      display="flex"
      width="40%"
      flexDirection="column"
      alignItems="center"
      borderRadius={2}
      margin={1}
      p={1}
      boxShadow={2}
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Box width="100%" display="flex" justifyContent="space-around">
        <img src={background.image} alt={background.institution} />
        <Typography variant="h5">{background.institution}</Typography>
      </Box>

      <Typography variant="h6">{background.degree}</Typography>
      <Typography variant="overline">{background.timePeriod}</Typography>

      <Typography variant="body1">{background.description}</Typography>
    </Box>
  );
};

export default BGCard;
