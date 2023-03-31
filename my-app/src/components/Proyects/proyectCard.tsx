import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { Proyect } from "../../data/data";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";

interface Props {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: Props) => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  const [show, setShow] = useState(true);

  const SeeMore = () => {
    setShow(!show);
  };

  return (
    <Grid container display="flex" justifyContent="center" width="40%">
      <Grid
        item
        xs={12}
        sx={{
          /* height: !show ? "60%" : "default", */
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => {
          SeeMore();
        }}
      >
        <Box
          display="flex"
          width="100%"
          height="100%"
          flexDirection="column"
          alignItems="center"
          borderRadius={2}
          margin={1}
          p={1}
          boxShadow={2}
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              boxShadow: 3,
              transform: "scale(1.01)",
              transitionDelay: "0.05s",
            },
          }}
        >
          <Collapse in={show} collapsedSize="40%" timeout={1000}>
            <img src={proyect.image} alt={proyect.name} width="100%" />
          </Collapse>
          <Typography variant="h4" onClick={() => handleLink(proyect.link)}>
            {proyect.name}
          </Typography>

          <Typography variant="overline">{proyect.period}</Typography>
          {!show && (
            <Fade in={!show} timeout={1000}>
              <Grid item>
                {" "}
                <Typography variant="body2">{proyect.description}</Typography>
              </Grid>
            </Fade>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProyectCard;
