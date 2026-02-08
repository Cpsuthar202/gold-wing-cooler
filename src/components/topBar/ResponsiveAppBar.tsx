import * as React from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../public/images/logo.png";
import { Image } from "@components/image";
import { sidebarMenuList } from "@components/sideBar/utils";
import { useTopBar } from "./TopBar.hook";
import pdf from "@/data/GOLD WING COOLER.pdf";
import { WebShare } from "@components/Container/index";

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [submenuAnchor, setSubmenuAnchor] = React.useState<null | HTMLElement>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = React.useState<string | null>(null);

  const {
    variable: { isSmScreen },
    methods: { navigate },
  } = useTopBar();

  /* 🔹 Desktop submenu (Model) */
  const modelMenu = sidebarMenuList.find((m) => m.subMenu);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Image src={logo} alt="logo" sx={{ width: isSmScreen ? 150 : 200, cursor: "pointer" }} onClick={() => navigate("/")} />

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {sidebarMenuList.map((item) =>
            !item.subMenu ? (
              <Button key={item.id} onClick={() => navigate(item.link)} sx={{ color: "primary.dark" }}>
                {item.label}
              </Button>
            ) : (
              <Button key={item.id} sx={{ color: "primary.dark" }} onClick={(e) => setSubmenuAnchor(e.currentTarget)}>
                {item.label}
              </Button>
            ),
          )}
          <Button
            component="a"
            href={pdf} // your catalogue file path
            download
          >
            Catalogue
          </Button>
          <Button
            component="a"
            href="https://pin.it/3aMhz1iqO" // your Pinterest link
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterests
          </Button>
          <WebShare text="Gold Wing Cooler" url="/">
            <Button component="a">Share</Button>
          </WebShare>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MenuIcon sx={{ color: "primary.dark" }} />
        </IconButton>
      </Toolbar>

      {/* Desktop SubMenu */}
      <Menu
        anchorEl={submenuAnchor}
        open={Boolean(submenuAnchor)}
        onClose={() => setSubmenuAnchor(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 2,
              p: 1,
              backgroundColor: "#fff",
            },
          },
        }}
      >
        {modelMenu?.subMenu?.map((sub) => (
          <MenuItem
            key={sub.id}
            onClick={() => {
              setSubmenuAnchor(null);
              navigate(sub.link);
            }}
          >
            {sub.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Dropdown Menu with SubMenu Toggle */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
          setOpenMobileSubMenu(null);
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              backgroundColor: "#fff",
              minWidth: 220,
            },
          },
        }}
      >
        {sidebarMenuList.map((item) =>
          !item.subMenu ? (
            <MenuItem
              key={item.id}
              onClick={() => {
                setAnchorEl(null);
                navigate(item.link);
              }}
            >
              {item.label}
            </MenuItem>
          ) : (
            <Box key={item.id}>
              {/* Parent Menu */}
              <MenuItem sx={{ fontWeight: 600 }} onClick={() => setOpenMobileSubMenu((prev) => (prev === item.id ? null : item.id))}>
                {item.label}
              </MenuItem>

              {/* SubMenu */}
              {openMobileSubMenu === item.id &&
                item.subMenu.map((sub) => (
                  <MenuItem
                    key={sub.id}
                    sx={{ pl: 4 }}
                    onClick={() => {
                      setAnchorEl(null);
                      setOpenMobileSubMenu(null);
                      navigate(sub.link);
                    }}
                  >
                    {sub.label}
                  </MenuItem>
                ))}
            </Box>
          ),
        )}
        <MenuItem
          component="a"
          href={pdf} // your catalogue file path
          download
        >
          Catalogue
        </MenuItem>

        <MenuItem
          component="a"
          href="https://pin.it/3aMhz1iqO" // your Pinterest link
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest
        </MenuItem>
        <WebShare text="Gold Wing Cooler" url="/">
          <MenuItem component="a">Share</MenuItem>
        </WebShare>
      </Menu>
    </AppBar>
  );
}
