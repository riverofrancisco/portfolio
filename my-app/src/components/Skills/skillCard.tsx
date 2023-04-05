import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Skill } from "../../data/data";

interface Props {
  skill: Skill;
}

const Card = ({ skill }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      borderRadius="15%"
      margin={2}
      borderTop={1}
      borderBottom={1}
      borderColor="white"
      p={1}
      boxShadow={2}
      sx={{
        width: { xs: "23%", md: "15%" },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.05)",
          transitionDelay: "0.05s",
        },
      }}
    >
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom sx={{ variant: { xs: "body", md: "h5" } }}>
          {skill.name}
        </Typography>
      </Box>
      <img
        width="100%"
        style={{ borderRadius: "15%" }}
        src={skill.image}
        alt={skill.name}
      />
    </Box>
  );
};

export default Card;
