export const appState = {
  user: null,
  theme: "light",
};

export function setTheme(theme) {
  appState.theme = theme;
  document.body.className = theme;
  console.log(`Theme set to ${theme}`);
}
