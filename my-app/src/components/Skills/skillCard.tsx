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
      border={2}
      borderRadius="30%"
      margin={1}
      p={3}
      boxShadow={5}
      bgcolor="lightgrey"
      maxWidth="30%"
    >
      <Typography variant="h5">{skill.name}</Typography>
      <img width="100%" src={skill.image} alt={skill.name} />
    </Box>
  );
};

export default Card;
