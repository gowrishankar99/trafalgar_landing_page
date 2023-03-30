import { Avatar, MobileStepper, Stack, Typography } from "@mui/material";
import React from "react";
import { BackIcon, NextIcon } from "../assets/services/SVGImages";
import userImage from "../assets/testimonials/userImage.png";
import Group from "../assets/testimonials/Group.png";
import bluePattern from "../assets/testimonials/bluePattern.png";
import waterDrop from "../assets/testimonials/waterDrop.png";
import { articles } from "../constants";

const Testimonials = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <Stack width="100%" justifyCOntent="center" alignItems="center" sx={{ position: "relative" }}>
      <Stack
        justifyCOntent="center"
        alignItems="center"
        width="1000px"
        height="425px"
        sx={{ background: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)", borderRadius: "24px", position: "relative" }}
        spacing={3.5}
      >
        {/* Patterns and Bg Image */}
        <Stack
          width={131}
          height={115}
          top={270}
          left={-50}
          sx={{ backgroundImage: `url(${bluePattern})`, backgroundRepeat: "no-repeat", position: "absolute" }}
        />
        <Stack
          width={131}
          height={115}
          right={-40}
          top={-12}
          sx={{ backgroundImage: `url(${Group})`, backgroundRepeat: "no-repeat", position: "absolute" }}
        />
        {/* ********** */}

        <Typography pt={8} fontWeight={700} fontSize={36} color="#FFF">
          What our customer are saying
        </Typography>
        <Stack sx={{ width: "56px", height: "2px", backgroundColor: "#FFF", borderRadius: "5px" }} />

        {/* Will be dynamic -> need to add in constants folder */}
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={13.75}>
          {/* User Avatar, Name and Designation */}
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Avatar alt="Edward Newgate" src={userImage} sx={{ width: 141, height: 141 }} />
            <Stack>
              <Typography fontWeight={700} fontSize={22} color="#FFF">
                Edward Newgate
              </Typography>
              <Typography fontWeight={400} fontSize={18} color="#FFF">
                Founder Circle
              </Typography>
            </Stack>
          </Stack>

          {/* User testimonial */}
          <Typography fontWeight={400} fontSize={19} color="#FFF">
            “Our dedicated patient engagement app and
            <br /> web portal allow you to access information
            <br /> instantaneously (no tedeous form, long calls,
            <br /> or administrative hassle) and securely”
          </Typography>
        </Stack>
      </Stack>

      {/* Stepper */}
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, pt: 5, cursor: "pointer" }}
        nextButton={
          <Stack
            onClick={() => {
              setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));
            }}
          >
            <NextIcon />
          </Stack>
        }
        backButton={
          <Stack
            onClick={() => {
              setActiveStep((prev) => (prev === 0 ? 3 : prev - 1));
            }}
          >
            <BackIcon />
          </Stack>
        }
      />

      {/* Latest Article */}
      <Stack width="100%" justifyCOntent="center" alignItems="center" spacing={3.5}>
        <Typography pt={8} fontWeight={700} fontSize={36} color="#000">
          Check out our latest article
        </Typography>

        <Stack sx={{ width: "56px", height: "2px", backgroundColor: "#000", borderRadius: "5px", position: "relative" }} />
        {/* Patterns and Bg Image */}
        <Stack
          width={131}
          height={115}
          bottom={450}
          left={150}
          sx={{ backgroundImage: `url(${bluePattern})`, backgroundRepeat: "no-repeat", position: "absolute" }}
        />
        <Stack
          width={474}
          height={500}
          sx={{
            position: "absolute",
            backgroundImage: `url(${waterDrop})`,
            backgroundRepeat: "no-repeat",
            right: 0,
            top: 629,
          }}
        />
        {/* ********* */}

        {/* Articles */}
        <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap" spacing={4.25} mt={5} pt={5} zIndex={20}>
          {articles.map((article) => {
            return (
              <Stack
                key={article.id}
                width={350}
                height={512}
                spacing={3}
                sx={{ boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)", background: "#FFFF", borderRadius: "20px" }}
              >
                <img style={{ width: "100%", height: "246px", borderRadius: "20px 20px 0 0" }} src={article.image} alt={article.id} />
                <Typography pl={4.125} pr={6.37} fontWeight={600} fontSize={21} color="#000">
                  {article.title}
                </Typography>
                <Typography pl={4.125} pr={6.37} fontWeight={300} fontSize={16} color="#7D7987">
                  {article.description}
                </Typography>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                  <Typography pl={4.125} fontWeight={400} fontSize={17} color="#4089ED">
                    Read more
                  </Typography>
                  <Stack width={14} height={9}>
                    <NextIcon />
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        {/* View All Button */}
        <Stack
          sx={{ border: "1.4px solid #458FF6", borderRadius: 55, width: 200, height: 56, cursor: "pointer" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontWeight={700} fontSize={18} color="#458FF6">
            View all
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
