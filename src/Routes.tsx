import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Detail from "./pages/Detail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/detail/:ccn3" Component={Detail} />
      <Route path="*" Component={NoPage} />
    </Routes>
  );
};

export default AllRoutes;
