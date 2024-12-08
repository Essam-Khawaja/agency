import { Outlet, ScrollRestoration } from "react-router-dom";

import Nav from "../Nav";

function RootLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
