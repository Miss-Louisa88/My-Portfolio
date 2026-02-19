import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
