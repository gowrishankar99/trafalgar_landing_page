import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";


import bluePattern from "../assets/testimonials/bluePattern.png";
import { about } from "../constants";

const About = () => {
  return (
    <Stack
      width="100%"
      minHeight={432}
      sx={{ background: "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)", position: "relative" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={8}
    >
      {/* Pattern */}
      <Stack
        width={131}
        height={115}
        top={-70}
        right={0}
        sx={{ backgroundImage: `url(${bluePattern})`, backgroundRepeat: "no-repeat", position: "absolute" }}
      />
      <Stack
        width={131}
        height={115}
        bottom={0}
        left={-140}
        sx={{ backgroundImage: `url(${bluePattern})`, backgroundRepeat: "no-repeat", position: "absolute" }}
      />
      {/* ********** */}

      {/* Company Info */}
      <Stack spacing={3} width={391} mr={10}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack
            width={41}
            height={41}
            fontWeight={700}
            fontSize={26}
            justifyContent="center"
            alignItems="center"
            sx={{ borderRadius: "50%", backgroundColor: "#FFF", color: "#5B9BF3" }}
          >
            T
          </Stack>
          <Typography fontWeight={700} fontSize={24} color="#FFF">
            Trafalgar
          </Typography>
        </Stack>
        <Typography fontWeight={300} fontSize={18} color="#FFF">
          Trafalgar provides progressive, and affordable
          <br /> healthcare, accessible on mobile and online
          <br /> for everyone
        </Typography>
        <Typography fontWeight={300} fontSize={18} color="#FFF">
          ©Trafalgar PTY LTD 2020. All rights reserved
        </Typography>
      </Stack>
      {/* *********** */}


      {about.map((item) => {
        return (
          <Stack justifyContent="flex-start" alignItems="center">
            <Typography width="100%" pl={3.4} fontWeight={700} fontSize={20} color="#FFF">
              {item.title}
            </Typography>
            <List sx={{ listStyle: "none" }}>
              {item.items.map((data) => (
                <ListItem>
                  <Typography fontWeight={300} fontSize={18} color="#FFF">
                    {data}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default About;
