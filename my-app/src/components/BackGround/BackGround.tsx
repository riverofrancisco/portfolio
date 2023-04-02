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
        sx={{ mt: { xs: 0, md: 10 }, mb: 4 }}
        py={2}
      >
        <Typography variant="h3">Background</Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" border={1}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" justifyContent="center">
            {myBackground.map((b: Background) => {
              return <BGCard key={b.degree} background={b} />;
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BackgroundList;
