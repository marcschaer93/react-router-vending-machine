import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { NavLink } from "react-router-dom";
import "./ButtonAppBar.css";

const pages = ["Home", "Amlou", "Flatpan", "Peppermint"];

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {pages.map((page) => (
            <Button
              className="AppBarBtn"
              key={page}
              component={NavLink} // Use NavLink component here
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`} // Example route based on page name
              color="inherit"
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
