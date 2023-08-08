import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
