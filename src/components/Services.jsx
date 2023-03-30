import { Stack, Typography } from "@mui/material";
import React from "react";

import waterDrop from "../assets/services/waterDrop.png";
import pattern from "../assets/home/pattern.png";
import medicineIllustration from "../assets/services/medicineIllustration.png";
import { services } from "../constants";

const Services = () => {
  return (
    <Stack width="100%">
      <Stack spacing={3.5} justifyContent="center" alignItems="center">
        <Typography fontWeight={600} fontSize={36} color="#000">
          Our Services
        </Typography>
        <hr style={{ width: "56px", height: "2px", backgroundColor: "#000", borderRadius: "5px" }} />
        <div>
          <Typography fontWeight={300} fontSize={18} color="#7D7987">
            We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment
          </Typography>
          <Typography fontWeight={300} fontSize={18} color="#7D7987" textAlign="center">
            with our highly qualified doctors you can consult with us which type of service is suitable for your health
          </Typography>
        </div>
      </Stack>

      <Stack
        // direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "relative",
          backgroundImage: `url(${waterDrop})`,
          backgroundRepeat: "no-repeat",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 400px)",
          gridAutoRows: "400px",
          // gridGap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
        flexWrap="wrap"
        spacing={4.25}
        mt={5}
        pt={5}
      >
        <Stack
          sx={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "131px",
            height: "115px",
            right: "100.9px",
            top: "360px",
          }}
        />
        {services.map((service, index) => {
          return (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                maxWidth: "350px",
                height: "354px",
                backgroundColor: "#FFF",
                boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)",
                borderRadius: "20px",
                zIndex: 20,
              }}
              spacing={2.8}
              mt={index === 0 ? 4.375 : 0}
            >
              <service.icon />
              <Typography px={4.8} fontWeight={700} fontSize={24} color="#000">
                {service.title}
              </Typography>
              <Typography px={4.8} fontWeight={300} fontSize={16} color="#7D7987">
                {service.description}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      <Stack width="100%" justifyContent="center" alignItems="center" pt={8.625}>
        <Stack
          sx={{ border: "1px solid #458FF6", borderRadius: 55, width: 200, height: 56, cursor: "pointer" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontWeight={700} fontSize={18} color="#458FF6">
            Learn more
          </Typography>
        </Stack>
      </Stack>

      {/* Leading HealthCare Section */}
      <Stack direction="row" px={16.8} pt={11} spacing={17.75}>
        <img
          src={medicineIllustration}
          style={{
            width: "600px",
            height: "598px",
            objectFit: "contain",
          }}
          alt="pattern"
        />
        <Stack spacing={3.2} pt={22}>
          <Typography fontWeight={600} fontSize={36} color="#000">
            Leading healthcare providers
          </Typography>
          <Stack sx={{ width: "56px", height: "2px", backgroundColor: "#000", borderRadius: "5px" }} />

          <Typography fontWeight={300} fontSize={18} color="#7D7987">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We
            take pride in the solutions we deliver
          </Typography>
          <Stack
            sx={{ border: "1px solid #458FF6", borderRadius: 55, width: 200, height: 56, cursor: "pointer" }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontWeight={700} fontSize={18} color="#458FF6">
              Learn more
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Services;
