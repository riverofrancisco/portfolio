import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Background, myBackground } from "../../data/data";
import Typography from "@mui/material/Typography";
import BGCard from "./bgCard";

const BackgroundList = () => {
  return (
    <Grid
      container
      xs={12}
      bgcolor="whitesmoke"
      style={{ height: "100%", width: "100vw" }}
      sx={{ py: 4 }}
      borderTop={3}
      borderBottom={1}
      id="Background"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        border={1}
        sx={{ mt: { xs: 0, md: 6 }, mb: { xs: 4, md: 8 } }}
        py={2}
      >
        <Typography
          variant="h3"
          fontWeight="bolder"
          style={{
            textShadow:
              "2px 2px 0px rgba(255, 255, 255, 0.5), 4px 4px 2px rgba(0, 0, 0, 0.15)",
          }}
        >
          Background
        </Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" border={1}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {myBackground.map((b: Background) => {
            return <BGCard key={b.degree} background={b} />;
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BackgroundList;
