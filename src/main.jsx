import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/NavIGATION.jsx";
import LogoLayout from "./components/LogoLayout.jsx";
import ThemeNavigation from "./components/ThemeNavigation.jsx";
import HomePage from "./pages/HomePage";
import "./Hello.css";
import "./color.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeNavigation/>
    <LogoLayout />
    <Navigation />
    <HomePage />
  </StrictMode>
);
