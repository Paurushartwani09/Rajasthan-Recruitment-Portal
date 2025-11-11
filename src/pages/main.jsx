import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "src/pages/App.jsx";
import Hello from "src/pages/Hello.jsx";
import NavBar from "src/pages/NavBar.jsx";
import "./Hello.css";
import "./CommonSlider.css";

import HomePage from "src/pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <Hello />
    <NavBar />
    <App />
     <HomePage />
     <Button/>
  </StrictMode>
);
