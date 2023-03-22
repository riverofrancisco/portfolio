import React from "react";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Skill } from "../../data/data";

interface Props {
  skill: Skill;
}

const SoftCard = ({ skill }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="10%"
      margin={1}
      px={4}
      boxShadow={1}
      maxWidth="20%"
      sx={{
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Typography variant="h5" m={5}>
        {skill.name}
      </Typography>
    </Box>
  );
};

export default SoftCard;
