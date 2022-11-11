import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";
import Footer from "./Footer";
import App from "./App";
import Forecast from "./Forecast";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="WeatherApp">
      <Search />
      <App />
      <Forecast />
      <Footer />
    </div>
  </StrictMode>
);
