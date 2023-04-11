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
      xs={12}
      style={{ height: "100%", width: "100vw" }}
      sx={{ py: 4 }}
      /*       borderTop={3}
      borderBottom={3} */
    >
      <Grid item xs={12} md={7} width="100%" display="flex" /*  border={1} */>
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
        xs={12}
        md={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        /* border={1} */
      >
        <Typography
          variant="h2"
          fontWeight="bolder"
          style={{
            textShadow:
              "2px 2px 0px rgba(255, 255, 255, 0.5), 4px 4px 2px rgba(0, 0, 0, 0.15)",
          }}
        >
          SoftSkills
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SoftSkills;
