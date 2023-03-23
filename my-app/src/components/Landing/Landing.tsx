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
      direction="row"
      style={{ height: "100vh", width: "100vw" }}
      bgcolor="whitesmoke"
      id="Home"
    >
      <Grid
        item
        xs={12}
        md={6}
        border={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height={"55vh"}
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
                fontWeight: 700,
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
        sx={{ py: { sm: 20 } }}
        border={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="40%"
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
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
