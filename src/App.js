import { Stack } from "@mui/material";
import { Home, Navbar, Services, Apps, Testimonials, About } from "./components";

function App() {
  return (
    <>
      <Stack>
        <Navbar />
        <Home />
      </Stack>
      <Stack pt={23}>
        <Services />
      </Stack>
      <Stack pt={8}>
        <Apps />
      </Stack>
      <Stack pt={8}>
        <Testimonials />
      </Stack>
      <Stack pt={25}>
        <About />
      </Stack>
    </>
  );
}

export default App;
