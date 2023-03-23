import React from "react";
import Card from "./skillCard";
import SoftCard from "./softSkillCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Skill, softSkills } from "../../data/data";
import Typography from "@mui/material/Typography";

const SoftSkills = () => {
  return (
    <Grid
      container
      style={{ height: "70vh", width: "100vw" }}
      borderTop={3}
      borderBottom={3}
    >
      <Grid item xs={7} width="100%" display="flex" border={1}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {softSkills.map((sk: Skill) => {
            return <SoftCard key={sk.name} skill={sk} />;
          })}
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border={1}
      >
        <Typography variant="h2">SoftSkills</Typography>
      </Grid>
    </Grid>
  );
};

export default SoftSkills;
