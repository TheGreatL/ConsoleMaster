/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html","./consoles.html"],
    theme: {
        extend: {
            fontFamily: {
                libre_franklin: ["Libre Franklin", "san-serif"],
            },

            fontSize: {
                xsm: "0.50rem",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
              '.hide-scroll-bar': {
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '-ms-overflow-style': 'none',  // IE and Edge
                'scrollbar-width': 'none',  // Firefox
              },
            });
          },
        
    ],
}
