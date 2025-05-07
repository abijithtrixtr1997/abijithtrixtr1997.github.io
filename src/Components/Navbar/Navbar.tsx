import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Divider, Drawer } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  const changeTheme = () => {
    const lightButton = document.querySelector(".light-button");
    const darkButton = document.querySelector(".dark-button");
    if (lightButton && darkButton) {
      lightButton.classList.toggle("inactive");
      darkButton.classList.toggle("inactive");
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="close-button w-full flex justify-end items-end ">
        <Button size="small">
          <CloseIcon
            sx={{
              fill: "white",
            }}
          />
        </Button>
      </div>

      <div className="in-box flex justify-start items-start flex-col p-5 gap-5">
        <Button className="!text-xl !font-bold !text-gray-50">HOME</Button>
        <Button className="!text-xl !font-bold !text-gray-50">PROJECTS</Button>
        <Divider />
      </div>
    </Box>
  );

  return (
    <nav className="bg-[#1a1a1a] text-2xl font-bold text-[#160718] p-4 w-full shadow-md fixed top-0 left-0 z-50 flex items-center justify-between">
      <div className="theme-container rounded-full !w-8 !h-8 ">
        <Button
          className="theme-switcher !rounded-full flex items-center justify-center relative !bg-gray-900 !w-8 !h-8 !min-w-0"
          onClick={changeTheme}
          sx={{
            color: "white",
          }}
        >
          <svg
            className="light-button"
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 -960 960 960"
            width="1rem"
          >
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
          </svg>
          <svg
            className="dark-button inactive"
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 -960 960 960"
            width="1rem"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>
        </Button>
      </div>

      <div className="pages hidden sm:flex justify-center items-center">
        <Button className="!hover:bg-red-50 hover:scale-105 !text-white transition duration-300 ease-in-out !hover:text-[#e47ef4]">
          HOME
        </Button>
        <Button className="!hover:bg-red-50 hover:scale-105 !text-white transition duration-300 ease-in-out ">
          PROJECTS
        </Button>
      </div>

      <div className="menu-icon sm:hidden">
        <Button className="flex" onClick={toggleDrawer(true)} color="primary">
          <MenuIcon sx={{ color: "white" }} />
        </Button>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              color: "#ffffff", // Tailwind's text-white
            },
            className:
              "custom-drawer flex flex-col items-center justify-start !bg-gray-500 text-white h-full py-10", // optional: if you're applying Tailwind or global styles
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </nav>
  );
};
