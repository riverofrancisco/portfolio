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
      style={{ height: "100vh", width: "100vw" }}
      mt={1}
      borderTop={3}
      borderBottom={3}
    >
      <Grid item xs={6} display="flex" border={1}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          my="30%"
        >
          {softSkills.map((sk: Skill) => {
            return <SoftCard key={sk.name} skill={sk} />;
          })}
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border={1}
      >
        <Typography variant="h1">SoftSkills</Typography>
      </Grid>
    </Grid>
  );
};

export default SoftSkills;
