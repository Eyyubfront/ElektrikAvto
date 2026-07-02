import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Burgermenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <IconButton onClick={() => setOpen(!open)}>
        {open ? <Close /> : <MenuIcon />}
      </IconButton>

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  slotProps={{
    paper: {
      sx: {
        width: 250,
        height: "350px",
        borderRadius: 2,
        m: 0,
      },
    },
  }}
  sx={{
    "& .MuiDialog-container": {
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
  }}
>
        <Box sx={{ p: 4 }}>
          
          <div  className=" flex justify-end">
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <Close />
            </IconButton>
          </div>

          <Stack spacing={3} mt={4}>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#f59e0b" : "#6b7280",
                textDecoration: "none",
                fontFamily: "Montserrat",
              })}
            >
              <Typography>Əsas səhifə</Typography>
            </NavLink>

            <NavLink
              to="/announcement"
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#f59e0b" : "#6b7280",
                textDecoration: "none",
                fontFamily: "Montserrat",
              })}
            >
              <Typography>Elan</Typography>
            </NavLink>

            <NavLink
              to="/info"
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#f59e0b" : "#6b7280",
                textDecoration: "none",
                fontFamily: "Montserrat",
              })}
            >
              <Typography>Məlumat</Typography>
            </NavLink>

            <NavLink
              to="/charging"
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#f59e0b" : "#6b7280",
                textDecoration: "none",
                fontFamily: "Montserrat",
              })}
            >
              <Typography>Şarj məntəqələri</Typography>
            </NavLink>
          </Stack>

        </Box>
      </Dialog>
    </Box>
  );
};

export default Burgermenu;