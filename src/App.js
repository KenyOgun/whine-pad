import Discovery from "./components/Discovery";
import React from "react";

const isDiscovery = window.location.pathname.replace(/\//g, "") === "discovery";

function App() {
  if (isDiscovery) {
    return <Discovery />;
  }
}

export default App;
