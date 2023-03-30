import { Stack, Typography } from "@mui/material";
import React from "react";

import pattern from "../assets/home/pattern.png";
import trafalgarIllustration from "../assets/home/trafalgarIllustration.png";

const Home = () => {
  return (
    <Stack pt={8} direction="row" alignItems="center" spacing={13.6}>
      <Stack>
        <img
          src={pattern}
          style={{
            width: "80px",
            height: "115px",
            objectFit: "contain",
          }}
          alt="pattern"
        />
        <Stack spacing={3.2} pl={23}>
          <Typography fontWeight={700} fontSize={48} color="#000000">
            Virtual healthcare
            <br />
            for you
          </Typography>
          <Typography fontWeight={300} fontSize={21} color="#7D7987">
            Trafalgar provides progressive, and affordable
            <br />
            healthcare, accessible on mobile and online
            <br /> for everyone Consult today
          </Typography>
          <Stack
            sx={{ backgroundColor: "#458FF6", borderRadius: 55, width: 200, height: 56, cursor: "pointer" }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontWeight={700} fontSize={18} color="#FFF">
              Consult Today
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <img
        src={trafalgarIllustration}
        style={{
          width: "600px",
          height: "598px",
          objectFit: "contain",
        }}
        alt="pattern"
      />
    </Stack>
  );
};

export default Home;
