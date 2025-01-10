export function initNavbar() {
  console.log("Initializing navbar...");
  const navbar = document.getElementsByTagName("nav");
  navbar.addEventListener("click", (e) => {
    console.log(`Clicked on ${e.target.textContent}`);
  });
}
