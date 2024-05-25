import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config";

const config = {
  presets: [sharedConfig],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
