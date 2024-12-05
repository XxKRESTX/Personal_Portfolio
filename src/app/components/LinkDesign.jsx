/* Referenced from https://codepen.io/gbopola/pen/GRBONQr*/
import { extendVariants } from "@nextui-org/react";

export const MyLink = extendVariants("a", {
  base: `
    relative text-white cursor-pointer no-underline 
    transition-colors duration-300 ease-in-out
    focus:outline focus:outline-4 focus:outline-[#ff6347] 
    focus:outline-offset-2 hover:opacity-80
    after:content-[''] after:absolute after:h-[3px] 
    after:left-0 after:bottom-0 after:w-0 after:bg-[#ff6347] 
    after:transition-[width] after:duration-500 hover:after:w-full
    hover:text-[#ff6347]
  `,
  variants: {
    focusColor: {
      orange: "focus:outline-[#ff6347]",
    },
    hoverEffect: {
      underline: `
        relative after:content-[''] after:absolute after:h-[3px] 
    after:left-0 after:bottom-0 after:w-0 after:bg-[#ff6347] 
    after:transition-[width] after:duration-500 hover:after:w-full
    
      `,
    },
  },
  defaultVariants: {
    focusColor: "orange",
    hoverEffect: "underline",
  },
});
