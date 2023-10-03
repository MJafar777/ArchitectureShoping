import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Shop = React.lazy(() => import("pages/Shop"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
