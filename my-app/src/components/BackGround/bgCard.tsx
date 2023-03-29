import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Background } from "../../data/data";
import Grid from "@mui/material/Grid";

interface Props {
  background: Background;
}

const BGCard = ({ background }: Props) => {
  return (
    <Box
      bgcolor="lightgrey"
      display="flex"
      width="40%"
      flexDirection="column"
      alignItems="center"
      borderRadius={2}
      margin={1}
      p={1}
      boxShadow={2}
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.01)",
          transitionDelay: "0.05s",
        },
      }}
    >
      <Grid container bgcolor="lightgrey">
        <Grid
          item
          xs={4}
          sx={{
            p: 1,
          }}
        >
          {" "}
          <img
            width="100%"
            src={background.image}
            alt={background.institution}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{background.institution}</Typography>
          <Typography variant="h6">{background.degree}</Typography>
          <Typography gutterBottom variant="overline">
            {background.timePeriod}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{background.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BGCard;
