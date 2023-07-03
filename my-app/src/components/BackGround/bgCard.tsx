import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Background } from "../../data/data";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";

interface Props {
  background: Background;
}

const BGCard = ({ background }: Props) => {
  const theme = useTheme();
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <Grid container sx={{ width: { xs: "90%", sm: "47%", md: "40%" } }}>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={2}
          margin={1}
          p={2}
          boxShadow={2}
          sx={{
            width: "100%",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              boxShadow: 3,
              transform: "scale(1.01)",
              transitionDelay: "0.05s",
            },
          }}
        >
          <Grid container>
            <Grid
              item
              xs={4}
              sx={{
                p: 1,
              }}
            >
              {" "}
              <Button>
                <img
                  width="100%"
                  src={background.image}
                  alt={background.institution}
                  onClick={() => handleLink(background.link)}
                />
              </Button>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">{background.institution}</Typography>
              <Typography
                variant="subtitle1"
                fontStyle="italic"
                fontWeight={100}
              >
                {background.degree}
              </Typography>
              <Typography gutterBottom variant="overline">
                {background.timePeriod}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">{background.description}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BGCard;
