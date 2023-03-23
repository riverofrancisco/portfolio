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
      margin={1}
      p={1}
      boxShadow={2}
      maxWidth="20%"
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Typography gutterBottom variant="h5">
        {skill.name}
      </Typography>
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
