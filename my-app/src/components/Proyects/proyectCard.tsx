import React from "react";
import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { Proyect } from "../../data/data";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: Props) => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  const [show, setShow] = useState(true);
  const [boxHeight, setBoxHeight] = useState(0);
  const firstBoxRef = useRef<HTMLDivElement>(null);

  const SeeMore = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (firstBoxRef.current) {
      setBoxHeight(firstBoxRef.current.offsetHeight);
    }
  }, []);
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      sx={{
        width: { xs: "95%", sm: "47%", md: "40%" },
        mb: { xs: 5, sm: 0 },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",

            transform: "scale(1.01)",
            transitionDelay: "0.05s",
          },
        }}
        onClick={() => {
          SeeMore();
        }}
      >
        <Collapse in={show} collapsedSize="35%" timeout={1000}>
          <img src={proyect.image} alt={proyect.name} width="100%" />
        </Collapse>
        <Box display="flex" justifyContent="space-between" width="100%" mx={1}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">{proyect.name}</Typography>

            <Typography variant="overline">{proyect.period}</Typography>
          </Box>
          <Fade in={!show} timeout={1000}>
            <Box>
              <IconButton
                size="large"
                sx={{ m: 0.5 }}
                onClick={() => handleLink(proyect.video)}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                size="large"
                sx={{ m: 0.5 }}
                onClick={() => handleLink(proyect.link)}
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Fade>
        </Box>

        <Fade in={!show} timeout={1000}>
          <Grid
            item
            sx={{
              borderTop: show ? 0 : 1,
              py: 2,
            }}
          >
            {" "}
            <Box>
              <Typography variant="body2">{proyect.description}</Typography>
            </Box>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default ProyectCard;
