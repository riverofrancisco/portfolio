import React from "react";
import Card from "./skillCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Skill, techSkills } from "../../data/data";
import Typography from "@mui/material/Typography";

const TechSkills = () => {
  return (
    <Grid
      container
      style={{ height: "100vh", width: "100vw" }}
      borderTop={3}
      borderBottom={3}
    >
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center" 
        border={1}
      >
        <Typography variant="h1">TechSkills</Typography>
      </Grid>
      <Grid item xs={6} display="flex" border={1}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {techSkills.map((sk: Skill) => {
            return <Card key={sk.name} skill={sk} />;
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TechSkills;
