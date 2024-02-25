/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".picinfo": {
          "@apply w-[80px] h-[80px] rounded-[10px] cursor-pointer object-cover border-[1px] border-solid border-[#fdfbf9] box-border hover:border-[#eb2529] hover:border-[3px]": "",
        },
        ".strong": {
          "@apply text-[20px] font-['JalnanGothic'] text-[#eb2529] block": "",
        },
        ".profilep": {
          "@apply text-[#fdfbf9] mb-[20px] font-['JalnanGothic']": "",
        },
      });
    },
  ],
  jit: false,
};
