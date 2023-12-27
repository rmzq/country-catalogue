import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="*" Component={NoPage} />
    </Routes>
  );
};

export default AllRoutes;
