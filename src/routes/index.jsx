import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import NotFound from "@pages/NotFound";
import Layout from "@components/Layout";
import '@react95/icons/icons.css';
const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
