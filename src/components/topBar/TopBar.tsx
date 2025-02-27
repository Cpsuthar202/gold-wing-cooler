import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { mColor } from "@color";
import SideBar from "../sideBar/SideBar";
import { useTopBar } from "./TopBar.hook";
import { Image } from "@components/image";
import logo from "../../../public/images/logo.png";
// import LogoutDialog from "@/pages/auth/dialog/LogoutDialog";
// import SimpleDialog from "../dialog/SimpleDialog";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = () => {
  const {
    variable: { openDrawer, isSmScreen },
    methods: { navigate, toggleDrawer },
  } = useTopBar();
  return (
    <>
      {/*  bgcolor: "primary.main", */}
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", p: 0.5 }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <Image src={logo} alt="logo" sx={{ width: isSmScreen ? "150px" : "200px" }} onClick={() => navigate("/")} />

        <IconButton onClick={toggleDrawer(true)} sx={{ visibility: "hidden" }}>
          <MenuIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      {/* <Divider sx={{ width: "75%", m: "auto" }} /> */}

      {/* Sidebar Drawer component */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { bgcolor: mColor.white },
        }}
      >
        <SideBar onClickMenu={toggleDrawer(false)} />
      </Drawer>
    </>
  );
};

export default TopBar;

{
  /* <Image src={logo} alt="logo" sx={{ width: isSmScreen ? "200px" : "150px" }} onClick={() => navigate("/")} /> */
}
{
  /* <Typography variant="h6" sx={{ fontWeight: 800, cursor: "pointer", color: "white" }} onClick={() => navigate("/")}>
          GOLD WING COOLER
        </Typography> */
}
