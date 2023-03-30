import React from "react";
import { Stack, Typography } from "@mui/material";

import prescriptionIllustration from "../assets/apps/prescriptionIllustration.png";

const Apps = () => {
  return (
    <Stack direction="row" px={16.8} spacing={7.75}>
      <Stack spacing={3.2} pl={18.25} pt={22}>
        <Typography fontWeight={600} fontSize={36} color="#000">
          Download our mobile apps
        </Typography>
        <Stack sx={{ width: "56px", height: "2px", backgroundColor: "#000", borderRadius: "5px" }} />

        <Typography fontWeight={300} fontSize={18} color="#7D7987">
          Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </Typography>
        <Stack
          sx={{ border: "1px solid #458FF6", borderRadius: 55, width: 200, height: 56, cursor: "pointer" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontWeight={700} fontSize={18} color="#458FF6">
            Download 
          </Typography>
        </Stack>
      </Stack>
      <img
        src={prescriptionIllustration}
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

export default Apps;
