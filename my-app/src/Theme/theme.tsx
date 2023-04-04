export const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: "#a7cdf0",
          secondary: "#f8bb05",
          divider: "amber[200]",
          text: {
            primary: "grey[900]",
            secondary: "grey[800]",
          },
        }
      : {
          // palette values for dark mode
          primary: "#a7cdf0",
          secondary: "#f8bb05",
          divider: "whitesmoke",
          background: {
            default: "#121212",
            paper: "#121212",
          },
          text: {
            primary: "#fff",
            secondary: "#a7cdf0",
          },
        }),
  },
});
