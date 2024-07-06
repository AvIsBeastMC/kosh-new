import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
})
