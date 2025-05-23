import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { ContactP } from "./pages/ContactP";
import { Projects } from "./pages/Projects";
import { Events } from "./pages/Events";
import { Studio } from "./components/Studio";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home route - works for both / and /baymoh-studio */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<ContactP />} />
      </Route>
    </Routes>
  );
};
