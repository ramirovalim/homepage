import { initNavbar } from "./scripts/navbar.js";
import { initGallery } from "./scripts/gallery.js";
import { appState, setTheme } from "./scripts/state.js";

console.log("Initializing app...");

// // Initialize features
// initNavbar();
// initGallery();

// Set initial theme
setTheme(appState.theme);

console.log("App initialized!");

// Dynamic Script Loading
// function loadScript(src) {
//   const script = document.createElement("script");
//   script.src = src;
//   script.type = "module";
//   document.body.appendChild(script);
// }

// // Dynamically load a module
// document.getElementById("loadGallery").addEventListener("click", () => {
//   loadScript("./scripts/gallery.js");
// });
