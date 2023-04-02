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
      style={{ height: "100%", width: "100vw" }}
      sx={{ py: { xs: 4, md: 14 } }}
      borderTop={3}
      borderBottom={3}
      id="Skills"
    >
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border={1}
      >
        <Typography variant="h2">TechSkills</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        display="flex"
        alignItems="center"
        border={1}
        height="100%"
      >
        <Box
          height="70%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignSelf="center"
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
