/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    xl: { max: "1250px" },
    lg: { max: "1050px" },
    md: { max: "780px" },
    sm: { max: "520px" },
    xs: { max: "360px" },
  },
  colors: {
    neutral: {
      black: "#263238",
      darkGrey: "#4d4d4d",
      grey: "#717171",
      lightGrey: "#89939E",
      greyBlue: "#abbed1",
      silver: "#F5F7FA",
    },
    primary: "#4CAF4F",
    secondary: "#263238",
    infor: "#2194f3",
    colorShade: {
      shade1: "#43A046",
      shade2: "#388E3B",
      shade3: "#237D31",
      shade4: "#1B5E1F",
      shade5: "#103E13",
    },
    colorTint: {
      tint1: "#66BB69",
      tint2: "#81C784",
      tint3: "#A5D6A7",
      tint4: "#C8E6C9",
      tint5: "#E8F5E9",
    },
    action: {
      warning: "#FBC02D",
      error: "#E53835",
      success: "#2E7D31",
    },
  },
};
export const plugins = [];
