/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
       */
      brown: "#0d0d0d", // detalhes e fundo das mensagens
      lightBrown: "#1a1a2e", // caixa de mensagem
      darkBrown: "#100720", // fundo
      black: "#0000004C", // parte de cima, header "hire me"
      white: "#c5c6c7", // todas as palavras
      cyan: "#7b2cbf", // cor dos titulos e do hexagono que roda
      lightCyan: "#5a189a",
      darkCyan: "#4a148c", // parte da frente do degrade
      orange: "#9d4edd", // letras do nome principal, fundo degrade
      lightOrange: "#2d132c",
      darkOrange: "#1b1b3a",
      grey: "#5f0f40",
      lightGrey: "#e0aaff", // detalhes sutis para equilibrio
      darkGrey: "#d8bfd8", //textos do experience
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(156, 77, 255, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(156, 77, 255, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(156, 77, 255, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(224, 170, 255, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(224, 170, 255, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
