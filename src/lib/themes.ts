import { RoarerTheme } from "../stores/settings";

export const themes = {
  light: {
    theme: {
      v: 1,
      orange: "#cbd5e1",
      background: "#f1f5f9",
      foreground: "#0f172a",
      foregroundOrange: "#0f172a",
      roarer_link: "#0369a1",
      roarer_postStyle: "filled",
      roarer_colorScheme: "light",
    },
  },
  dark: {
    theme: {
      v: 1,
      orange: "#1e293b",
      background: "#020617",
      foreground: "#cbd5e1",
      foregroundOrange: "#e2e8f0",
      roarer_link: "#38bdf8",
      roarer_postStyle: "filled",
      roarer_colorScheme: "dark",
    },
  },
  stone: {
    theme: {
      v: 1,
      orange: "#292524",
      background: "#0c0a09",
      foreground: "#d6d3d1",
      foregroundOrange: "#e7e5e4",
      roarer_link: "#38bdf8",
      roarer_postStyle: "filled",
      roarer_colorScheme: "dark",
    },
  },
  meower: {
    theme: {
      v: 1,
      orange: "#e48b26",
      background: "#181818",
      foreground: "#eeeeff",
      foregroundOrange: "#181818",
      roarer_link: "#e48b26",
      roarer_postStyle: "bordered",
      roarer_colorScheme: "dark",
    },
    users: ["Meower"],
  },
  meo: {
    theme: {
      v: 1,
      orange: "#2f3040",
      background: "#1c1c26",
      foreground: "#fefefe",
      foregroundOrange: "#fefefe",
      roarer_link: "#9da1fe",
      roarer_postStyle: "filled",
      roarer_colorScheme: "dark",
    },
    users: ["Eris"],
  },
  lion: {
    theme: {
      v: 1,
      orange: "#432304",
      background: "#261303",
      foreground: "#e1d4cb",
      foregroundOrange: "#e6c6a8",
      roarer_link: "#d1853d",
      roarer_postStyle: "filled",
      roarer_colorScheme: "dark",
    },
    users: ["Scratchgaming2222"],
  },
  olive: {
    theme: {
      v: 1,
      orange: "#5d7737",
      background: "#213626",
      foreground: "#fefefe",
      foregroundOrange: "#ffffff",
      roarer_link: "#aaf8be",
      roarer_postStyle: "bordered",
      roarer_colorScheme: "dark",
    },
    users: ["Supernoodles99"],
  },
} satisfies {
  [k in string]: {
    theme: RoarerTheme;
    users?: string[];
  };
};
