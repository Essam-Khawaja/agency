import { Outlet, ScrollRestoration } from "react-router-dom";

import Nav from "../Nav";
import StickyCursor from "../StickyCursor";
import { useRef } from "react";

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
