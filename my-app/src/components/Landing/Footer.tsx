import React from "react";
import { Typography, Link, Button, ListItemIcon } from "@mui/material/";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import { Colours } from "../../Theme/theme";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    linkto: "https://www.linkedin.com/in/rivero-francisco/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    linkto: "https://github.com/riverofrancisco",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:franciscojose.rivero.ar@gmail.com",
  },
];

const Footer: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <footer>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        borderTop={0.5}
        bgcolor={Colours.GrisOscuro}
        color="white"
        py={4}
      >
        <Box display="flex" justifySelf="center">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Francisco Rivero
          </Typography>
        </Box>

        <Stack display="flex" flexDirection="row" alignItems="center">
          {actions.map((action) => {
            return (
              <IconButton
                color="inherit"
                key={action.name}
                onClick={() => handleLink(action.linkto)}
              >
                {action.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
