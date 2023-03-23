import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "@mui/material";

const StyledSpeedDial: React.ElementType<SpeedDialProps> = styled(SpeedDial)(
  ({ theme }) => ({
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  })
);

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

export default function SocialMediaSpeedDial() {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<SendIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleLink(action.linkto)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
