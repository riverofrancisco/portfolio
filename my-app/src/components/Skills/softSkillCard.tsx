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
      sx={{
        width: { xs: "27%", sm: "20%", md: "15%" },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.05)",
          transitionDelay: "0.05s",
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
