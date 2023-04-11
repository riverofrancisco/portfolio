import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Adder } from "../../redux/portfolio/actions";
import Button from "@mui/material/Button";
import { ProfileIMG } from "../../data/data";
import Avatar from "@mui/material/Avatar";
import SocialMediaSpeedDial from "../Animations/SocialMedia";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);

  const handleClick = () => {
    dispatch(Adder(1));
  };
  return (
    <Grid
      container
      xs={12}
      direction="row"
      style={{ height: "100vh", width: "100vw" }}
      id="Inicio"
    >
      <Grid
        item
        xs={12}
        md={6}
        /*   border={1} */
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={6}
      >
        <Box
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 20 } }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Francisco Rivero
            </Typography>

            <Typography variant="h6">FullStack Developer</Typography>

            <Box alignSelf="start" ml={4}>
              <SocialMediaSpeedDial />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ py: { xs: 0, md: 20 } }}
        /*    border={1} */
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          border={4}
          borderColor="white"
          boxShadow={2}
          sx={{
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <Avatar
            alt="FR"
            src={ProfileIMG}
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                boxShadow: 3,
                transform: "scale(1.05)",
                transitionDelay: "0.05s",
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
