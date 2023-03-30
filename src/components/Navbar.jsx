import { Stack, Typography } from "@mui/material";
import React from "react";

import logo from "../assets/logo.png";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = React.useState(0);

  return (
    <nav
      style={{
        paddingTop: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          maxWidth: "80rem",
        }}
        ml="auto"
        mr="auto"
        px={23}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Stack
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            style={{
              width: "160px",
              height: "41px",
              objectFit: "contain",
            }}
            alt="logo"
          />
        </Stack>

        {/* nav Items */}
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            gap: "2.5rem",
          }}
        >
          {navLinks.map((nav, index) => (
            <Typography
              key={nav.id}
              fontWeight={active === index ? 700 : 400}
              fontSize={18}
              sx={{ cursor: "pointer", "&:hover": { fontWeight: 700, color: "#1f1534" } }}
              onClick={() => setActive(index)}
              color={active === index ? "#1f1534" : "#AAA7B3"}
            >
              {nav.title}
            </Typography>
          ))}
        </ul>
      </Stack>
    </nav>
  );
};

export default Navbar;
