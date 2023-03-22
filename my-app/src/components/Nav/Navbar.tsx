import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Searcher from "./Searcher";
import { Link } from "@mui/material";

const navItems = ["Home", "Skills", "Proyects", "Background", "Contact"];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [section, setSection] = React.useState("");

  function scrollToTextField(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const handleSection = (item: string) => {
    setSection(item);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ px: { xs: 5, md: 5 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            FR
          </Typography>
          <Box sx={{ display: "flex", justifySelf: "end" }}>
            <Searcher />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Box
                key={item}
                borderRadius={1}
                sx={{
                  "&:hover": {
                    bgcolor: "#c2dcf5",
                  },
                }}
              >
                {" "}
                <Button
                  sx={{ color: "#fff" }}
                  onClick={() => scrollToTextField(item)}
                >
                  {item}
                </Button>{" "}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
